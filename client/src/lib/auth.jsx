import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { addFavorite, getAuthState, getFavoriteIds, logout, removeFavorite, signInWithPassword, signUpWithPassword } from './api.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [favoriteKeys, setFavoriteKeys] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [favoritesLoading, setFavoritesLoading] = useState(false)
  const [error, setError] = useState('')

  const loadFavoriteIds = useCallback(async function loadFavoriteIds() {
    setFavoritesLoading(true)

    try {
      const payload = await getFavoriteIds()
      setFavoriteKeys(new Set((payload.favorites ?? []).map((favorite) => favorite.key)))
    } catch {
      setFavoriteKeys(new Set())
    } finally {
      setFavoritesLoading(false)
    }
  }, [])

  const refreshAuth = useCallback(async function refreshAuth() {
    setIsLoading(true)
    setError('')

    try {
      const state = await getAuthState()
      setUser(state.user)
      if (state.user) {
        await loadFavoriteIds()
      } else {
        setFavoriteKeys(new Set())
      }
      return state.user
    } catch (authError) {
      setError(authError.message)
      setUser(null)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [loadFavoriteIds])

  useEffect(() => {
    refreshAuth()
  }, [])

  const signIn = useCallback(async function signIn(email, password) {
    const state = await signInWithPassword(email, password)
    setUser(state.user)
    await loadFavoriteIds()
    return state.user
  }, [loadFavoriteIds])

  const signUp = useCallback(async function signUp(email, password) {
    const state = await signUpWithPassword(email, password)
    setUser(state.user)
    await loadFavoriteIds()
    return state.user
  }, [loadFavoriteIds])

  const signOut = useCallback(async function signOut() {
    await logout()
    setUser(null)
    setFavoriteKeys(new Set())
  }, [])

  const favoriteKey = useCallback((articleType, articleId) => `${articleType}:${articleId}`, [])

  const isFavorite = useCallback(
    (articleType, articleId) => favoriteKeys.has(favoriteKey(articleType, articleId)),
    [favoriteKey, favoriteKeys]
  )

  const toggleFavorite = useCallback(
    async function toggleFavorite(articleType, articleId) {
      const key = favoriteKey(articleType, articleId)
      const wasFavorite = favoriteKeys.has(key)
      const nextKeys = new Set(favoriteKeys)

      if (wasFavorite) {
        nextKeys.delete(key)
      } else {
        nextKeys.add(key)
      }

      setFavoriteKeys(nextKeys)

      try {
        if (wasFavorite) {
          await removeFavorite(articleType, articleId)
        } else {
          await addFavorite(articleType, articleId)
        }

        return !wasFavorite
      } catch (favoriteError) {
        setFavoriteKeys(favoriteKeys)
        throw favoriteError
      }
    },
    [favoriteKey, favoriteKeys]
  )

  const value = useMemo(
    () => ({
      error,
      favoriteKeys,
      favoritesLoading,
      isAuthenticated: Boolean(user),
      isFavorite,
      isLoading,
      loadFavoriteIds,
      refreshAuth,
      signIn,
      signOut,
      signUp,
      toggleFavorite,
      user
    }),
    [
      error,
      favoriteKeys,
      favoritesLoading,
      isFavorite,
      isLoading,
      loadFavoriteIds,
      refreshAuth,
      signIn,
      signOut,
      signUp,
      toggleFavorite,
      user
    ]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)

  if (!value) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return value
}
