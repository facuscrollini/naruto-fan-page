import { CatalogIndividual } from "../../components/auth-components/catalog-components/CatalogIndividual"
import { CatalogList } from "../../components/auth-components/catalog-components/CatalogList"
import { CatalogTitle } from "../../components/auth-components/catalog-components/CatalogTitle"




export const Catalog = () =>{




    return (
        <>
        <CatalogTitle />
        <CatalogList/>
        <CatalogIndividual/>
        </>
    )
}