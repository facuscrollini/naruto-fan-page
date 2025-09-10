import { useAuth0, type RedirectLoginOptions } from "@auth0/auth0-react"

export const useAuthZero = ()=>{

    const {loginWithRedirect} = useAuth0()

    const loginWithGoogle = ()=>{
        loginWithRedirect({connection: "google-oauth2"} as unknown as RedirectLoginOptions)
    }

return loginWithGoogle()
}