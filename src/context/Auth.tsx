import { createContext, useContext, useState } from "react";
import { AuthContextData, Props, TUser } from "./types";

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user] = useState<TUser>({
    email: '',
    password: ''
  } as TUser)

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      user,
      isError,
      setIsError,
      setIsLoading,
      isLoading,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth() {
  const context = useContext(AuthContext)
  return context
}