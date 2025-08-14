import { createContext, useState } from "react";


export type Props = {
    children: React.ReactNode
}

const initialState = {
    userName: "",
    email: "",
    password: ""
}

export type UserType = {
userName:string;
email: string;
password:string,
}

export type ValueType = {
    user?: UserType,
    catalog?:string,
    changeCatalog: (type:string)=> void
    login?: (username:string, email:string, password:string) => void,
    logout?: ()=> void
}


export const AuthContext = createContext<ValueType | undefined>(undefined)


export const AuthProvider = ({children}:Props) =>{

const [user, setUser] = useState<UserType>(initialState)
const [catalog, setCatalog] = useState<string>("")

const login = (userName:string, email:string, password:string)=>{
setUser({
   userName: userName,
   email: email,
   password: password

})
}

const logout = () =>{
    setUser({
        userName: "",
        email: "",
        password: ""
    })
}

const changeCatalog = async(type: string) =>{
    await setCatalog(type)
}

return(
<AuthContext.Provider value={{user,catalog, changeCatalog, login, logout}}>
    {children}
</AuthContext.Provider>
    
)

}