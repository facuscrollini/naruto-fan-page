import { CatalogIndividual } from "./CatalogIndividual"
import { CatalogList } from "./CatalogList"

export const CatalogBody = () => {


  return (
   <div className="grid grid-cols-12 mx-[1vh] gap-2">
   <CatalogList/>
   <CatalogIndividual/>
   </div>
  )
}
