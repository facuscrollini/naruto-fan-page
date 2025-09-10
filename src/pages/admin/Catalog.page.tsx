import { useEffect } from "react"
import { CatalogBody } from "../../components/auth-components/catalog-components/CatalogBody"
import { CatalogHeader } from "../../components/auth-components/catalog-components/CatalogHeader"
import { useAuth } from "../../hooks/useContext/useAuth"
import { useNavigate } from "react-router"



export const Catalog = () =>{

const {catalog} = useAuth()
const nav = useNavigate()


useEffect(()=>{
    catalog?.trim() == "" && nav("/") 
},[])

    return (
        <div className="lg:w-[60rem] xl:w-[70rem] 2xl:w-[90rem] mx-auto h-fit mb-[4vh]">
        <CatalogHeader/>
        <CatalogBody/>
        </div>
    )
}