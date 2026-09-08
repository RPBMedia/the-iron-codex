/**
 * Admin authorization (Track C M9/M13).
 *
 * These are the tests that matter most in this track: everything else here is a
 * ranking optimisation, but this is the boundary protecting a private page.
 * Each case below is a way the check could plausibly be got wrong.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isAdminUser } from '../server/admin.js'

const ADMIN = 'rui.palma.baiao@gmail.com'
const googleAdmin = { email: ADMIN, providers: ['google'] }

test('the configured admin signed in with Google is admin', () => {
  assert.equal(isAdminUser(googleAdmin, ADMIN), true)
})

test('email match is NOT enough — a verified provider is required', () => {
  // The attack this prevents: registering the admin's address through the
  // password flow, which never proves control of the mailbox.
  assert.equal(isAdminUser({ email: ADMIN, providers: ['password'] }, ADMIN), false)
  assert.equal(isAdminUser({ email: ADMIN, providers: [] }, ADMIN), false)
  assert.equal(isAdminUser({ email: ADMIN }, ADMIN), false)
})

test('any other account is not admin, however it signed in', () => {
  assert.equal(isAdminUser({ email: 'someone@else.com', providers: ['google'] }, ADMIN), false)
})

test('an unset ADMIN_EMAIL means NOBODY is admin, not everybody', () => {
  // The dangerous failure mode: an empty config comparing equal to an empty
  // email and granting access to anyone.
  assert.equal(isAdminUser(googleAdmin, ''), false)
  assert.equal(isAdminUser(googleAdmin, undefined), false)
  assert.equal(isAdminUser({ email: '', providers: ['google'] }, ''), false)
  assert.equal(isAdminUser({ email: null, providers: ['google'] }, null), false)
})

test('no user at all is not admin', () => {
  assert.equal(isAdminUser(null, ADMIN), false)
  assert.equal(isAdminUser(undefined, ADMIN), false)
  assert.equal(isAdminUser({}, ADMIN), false)
})

test('comparison ignores case and surrounding whitespace', () => {
  assert.equal(isAdminUser({ email: '  RUI.Palma.Baiao@Gmail.com ', providers: ['google'] }, ADMIN), true)
  assert.equal(isAdminUser(googleAdmin, '  RUI.PALMA.BAIAO@GMAIL.COM  '), true)
})

test('a lookalike address does not match', () => {
  for (const email of [
    'rui.palma.baiao@gmail.com.evil.com',
    'xrui.palma.baiao@gmail.com',
    'rui.palma.baiao@gmail.co'
  ]) {
    assert.equal(isAdminUser({ email, providers: ['google'] }, ADMIN), false, email)
  }
})
