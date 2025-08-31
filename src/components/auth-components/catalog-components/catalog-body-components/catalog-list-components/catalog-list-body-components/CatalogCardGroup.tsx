import { useEffect, useState } from "react"
import { useAuth } from "../../../../../../hooks/useContext/useAuth"
import { useNaruto } from "../../../../../../hooks/useContext/useNaruto"

export const CatalogCardGroup = () => {

  const [page, setPage] = useState(1)
  const [quantityPerPage, setQuantityPerPage] = useState(16)
  const [quantityOfPages, setQuantityOfPages] = useState(1)
  const { store } = useNaruto()
  const { catalog } = useAuth()



  const createListForCatalog = (from: number, to: number) => {
    return store[catalog!]?.slice(from, to)
  }

  const [listItems, setListItems] = useState(createListForCatalog(0, quantityPerPage))

  const increasePage = () => {
    if(page < quantityOfPages){
      setPage(prev => prev + 1)
    }
  }

  const decreasePage = () => {
    if(page > 1){
      setPage(prev => prev - 1)
    }
  }

  useEffect(()=>{
    if(page > 1){
      setListItems(createListForCatalog(quantityPerPage * (page - 1), quantityPerPage * page))
    }
  },[page])


  useEffect(() => {
    setListItems(createListForCatalog(0, quantityPerPage))
    console.log("Cambió el catalogo")
  }, [catalog])

  useEffect(()=>{
console.log("List items cambió!")
 setQuantityOfPages(Math.ceil(store[catalog!]?.length! / quantityPerPage))
 setPage(1)
  },[listItems])


  return (
    <>
      {listItems?.map((item) => {
        return <p>{item.name}</p>
      })}
      <div className="flex gap-10">

        <button onClick={decreasePage} type="button"><i className="fa-solid fa-angle-left"></i></button>
        <p>{page}</p>
        <p>{quantityOfPages}</p>
        <button onClick={increasePage} type="button"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </>
  )
}
