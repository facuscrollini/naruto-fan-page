import { CatalogIndividual } from "./catalog-body-components/CatalogIndividual"
import { CatalogList } from "../catalog-components/catalog-body-components/CatalogList"

export const CatalogBody = () => {


  return (
    <div className="flex justify-center">
   <div className="grid grid-cols-12 gap-2 bg-stone-600/90 p-2 rounded-xl">
   <CatalogList/>
   <CatalogIndividual/>
   </div>
    </div>
  )
}
