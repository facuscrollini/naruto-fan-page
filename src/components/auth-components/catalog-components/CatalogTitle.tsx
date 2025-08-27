import { useAuth } from "../../../hooks/useContext/useAuth"

export const CatalogTitle = () =>{

    const {catalog} = useAuth()
    return (
        <>
        <div>List of {catalog}</div>
        </>
    )
}