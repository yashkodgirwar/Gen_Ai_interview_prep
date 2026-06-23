import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true)
            const data = await login({ email, password })
            setUser(data.user)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true)
            const data = await register({ username, email, password })
            setUser(data.user)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        try {
            setLoading(true)
            await logout()
            setUser(null)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(()=>{

   const getAndSetUser = async()=>{
     const data = await getMe()
     setUser(data.user)
      setLoading(false)
   }
      getAndSetUser()

   },[]
          )


    return { user, loading, handleLogin, handleLogout, handleRegister }
}
