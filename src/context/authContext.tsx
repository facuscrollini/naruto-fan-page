import { createContext, useState } from "react";
import type { NarutoStoreType } from "./narutoContext";


export type Props = {
    children: React.ReactNode
}

const initialState = {
    userName: undefined,
    email: undefined,
    password: undefined
}

export type UserType = {
    userName?: string;
    email?: string;
    password?: string,
}

export type ValueType = {
    user?: UserType,
    catalog?: keyof NarutoStoreType,
    logged: boolean,
    warningModal: boolean,
    setWarningModal: (type:boolean) => void,
    changeCatalog: (type: keyof NarutoStoreType) => void,
    login?: (username: string, email: string, password: string) => void,
    logout?: () => void
}


export const AuthContext = createContext<ValueType | undefined>(undefined)


export const AuthProvider = ({ children }: Props) => {

    const [user, setUser] = useState<UserType>(initialState)
    const [catalog, setCatalog] = useState<keyof NarutoStoreType>("clans")
    const [logged, setLogged] = useState<boolean>(true)
    const [warningModal, setWarningModal] = useState<boolean>(false)

    const login = (userName: string, email: string, password: string) => {
        setUser({
            userName: userName,
            email: email,
            password: password

        })
        setLogged(true)
    }

    const logout = () => {
        setUser({
            userName: "",
            email: "",
            password: ""
        })
        setLogged(false)
    }

    const changeCatalog = (type: keyof NarutoStoreType) => {
        setCatalog(type)
    }

    return (
        <AuthContext.Provider value={{ user, catalog, logged, changeCatalog, login, logout, warningModal, setWarningModal }}>
            {children}
        </AuthContext.Provider>

    )

}