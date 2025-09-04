import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useAuth } from "../../../../../../hooks/useContext/useAuth"
import { useNaruto } from "../../../../../../hooks/useContext/useNaruto"
import { CatalogCard } from "./catalog-list-body-cardgroup-components/CatalogCard"
import { clans, villages } from "../../../../../../js/apiExtra"

type Props = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  quantityOfPages: number,
  setQuantityOfPages: Dispatch<SetStateAction<number>>
}


export const CatalogCardGroup = ({ page, setPage, setQuantityOfPages }: Props) => {

  //I create an array that contains all images for villages by objects

  

  
  const quantityPerPage = 16

  const { store } = useNaruto()
  const { catalog, setCatalogItem, catalogItem} = useAuth()
  



  const createListForCatalog = (from: number, to: number) => {
    return store[catalog!]?.slice(from, to)
  }

  const [listItems, setListItems] = useState(createListForCatalog(0, quantityPerPage))


  useEffect(() => {
    if (page != 1) {
      setListItems(createListForCatalog(quantityPerPage * (page - 1), quantityPerPage * page))
      return
    }
    setListItems(createListForCatalog(0, quantityPerPage))

  }, [page])


  useEffect(() => {
    setListItems(createListForCatalog(0, quantityPerPage))
    setQuantityOfPages(Math.ceil(store[catalog!]?.length! / quantityPerPage))
    setPage(1)
    setCatalogItem({})
  }, [catalog])



  useEffect(()=>{
console.log(catalogItem)
  },[catalogItem])



  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 my-[1rem] ml-[1rem] p-[2rem] gap-2 h-[45vh] overflow-auto">
      {listItems && listItems.map((item, index) => {

        const description = catalog == "clans" ? (clans.find(el => el.id == item.id)?.description) : ""

        const image = "images" in item
          ? item.images[0]
          : catalog == "villages" ? (villages.find(el => el.id == item.id)?.image) : catalog == "clans" ? (clans.find(el => el.id == item.id)?.image) : ""

          const fullItem = {id: item.id, name: item.name, image: image, description: description, type:catalog}

        return <div onClick={()=>setCatalogItem(fullItem)}><CatalogCard key={index} image={image} name={item.name} /></div>
      })}

    </div>
  )
}
