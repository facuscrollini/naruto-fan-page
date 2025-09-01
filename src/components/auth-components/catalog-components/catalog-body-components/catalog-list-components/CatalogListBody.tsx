import { useState } from "react"
import { CatalogCardGroup } from "./catalog-list-body-components/CatalogCardGroup"
import { CatalogPages } from "./catalog-list-body-components/CatalogPages"

export const CatalogListBody = () => {
  const [page, setPage] = useState(1)
  const [quantityOfPages, setQuantityOfPages] = useState(1)
  return (
 <div className="flex flex-col h-full">
 <CatalogCardGroup setQuantityOfPages={setQuantityOfPages} quantityOfPages={quantityOfPages} page={page} setPage={setPage}/>
 <CatalogPages setQuantityOfPages={setQuantityOfPages} quantityOfPages={quantityOfPages} page={page} setPage={setPage}/>
 </div>
  )
}
