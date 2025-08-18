import { createContext, useState } from "react";


export type Props = {
    children: React.ReactNode
}

const initialState = {
    userName: undefined,
    email: undefined,
    password: undefined
}

export type UserType = {
userName?:string;
email?: string;
password?:string,
}

export type ValueType = {
    user?: UserType,
    catalog?:string,
    logged: boolean,
    changeCatalog: (type:string)=> void
    login?: (username:string, email:string, password:string) => void,
    logout?: ()=> void
}


export const AuthContext = createContext<ValueType | undefined>(undefined)


export const AuthProvider = ({children}:Props) =>{

const [user, setUser] = useState<UserType>(initialState)
const [catalog, setCatalog] = useState<string>("")
const [logged, setLogged] = useState<boolean>(false)

const login = (userName:string, email:string, password:string)=>{
setUser({
   userName: userName,
   email: email,
   password: password

})
setLogged(true)
}

const logout = () =>{
    setUser({
        userName: "",
        email: "",
        password: ""
    })
    setLogged(false)
}

const changeCatalog = (type: string) =>{
     setCatalog(type)
}

return(
<AuthContext.Provider value={{user,catalog, logged, changeCatalog, login, logout}}>
    {children}
</AuthContext.Provider>
    
)

}