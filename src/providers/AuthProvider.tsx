import { Auth0Provider } from "@auth0/auth0-react"

interface Props {
    children: React.ReactNode
}


export const AuthZeroprovider = ({children}:Props) =>{
    return <Auth0Provider
     domain="naruto-fanpage.eu.auth0.com"
    clientId="IwHMNoMpeOo4S66cj6Iap71uU7SyeT24"
    authorizationParams={{redirect_uri: window.location.origin}}
    > 
{children}
    </Auth0Provider>
}