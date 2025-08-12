import { CatalogIndividual } from "../../components/catalog-components/CatalogIndividual"
import { CatalogList } from "../../components/catalog-components/CatalogList"
import { CatalogTitle } from "../../components/catalog-components/CatalogTitle"

type CatalogType = {
    type: string
}


export const Catalog = ({type}:CatalogType) =>{




    return (
        <>
        <CatalogTitle type={type}/>
        <CatalogList/>
        <CatalogIndividual/>
        </>
    )
}