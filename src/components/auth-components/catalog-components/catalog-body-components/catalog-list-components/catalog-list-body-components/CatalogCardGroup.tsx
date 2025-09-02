import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useAuth } from "../../../../../../hooks/useContext/useAuth"
import { useNaruto } from "../../../../../../hooks/useContext/useNaruto"
import { CatalogCard } from "./catalog-list-body-cardgroup-components/CatalogCard"

type Props = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  quantityOfPages: number,
  setQuantityOfPages: Dispatch<SetStateAction<number>>
}


export const CatalogCardGroup = ({ page, setPage, setQuantityOfPages }: Props) => {

 //I create an array that contains all images for villages by objects
 const villages = [
  {id:0, image: ""},
  {id:1},
  //no image id 2
  {id:2},
  {id:3},
  //no image id 4
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  //no image id 9
  {id:9},
  {id:10},
  {id:11},
  {id:12},
  {id:13},
  {id:14},
  //no image id 15
  {id:15},
 ]
  const quantityPerPage = 16

  const { store } = useNaruto()
  const { catalog } = useAuth()



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
  }, [catalog])


  //I'm gonna use the useEffect to show all the listItems items everytime it changes
//There are 15 positions on village catalog
  useEffect(()=>{console.log(listItems)},[listItems])


  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-[2rem] gap-2 mx-[2rem] h-[45vh] overflow-auto">
      {listItems && listItems.map((item, index) => (
      
        <CatalogCard key={index} image={"images" in item ? item.images[0] : "https://res.cloudinary.com/dra2cr3uw/image/upload/v1756807956/1000_r0ow0d.png"} name={item.name} />
      ))}

    </div>
  )
}
