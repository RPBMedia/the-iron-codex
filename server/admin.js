/**
 * Admin authorization (Track C M9), extracted so it can be tested directly.
 *
 * The admin's address lives in ADMIN_EMAIL on the server and is compared here.
 * It is never sent to the browser and never appears in the client bundle — the
 * client learns only a boolean about itself.
 *
 * A VERIFIED provider is required, not just a matching address. Matching on
 * email alone would let anyone who registered that address through the password
 * flow become admin; Google sign-in proves control of the mailbox and the
 * password flow does not.
 */
export const normalizeEmail = (email) => String(email ?? '').trim().toLowerCase()

export function isAdminUser(user, adminEmail = process.env.ADMIN_EMAIL) {
  const configured = normalizeEmail(adminEmail)
  if (!configured) return false          // unset means nobody is admin, not everybody
  if (!user?.email) return false
  if (normalizeEmail(user.email) !== configured) return false
  return (user.providers ?? []).includes('google')
}
