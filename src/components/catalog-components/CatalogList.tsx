import { useAuth } from "../../hooks/useContext/useAuth"

export const CatalogList = () =>{

const {catalog} = useAuth()




    return (
        <>
        <div>
Hola soy catalogo de {catalog}
        </div>
        </>
    )
}