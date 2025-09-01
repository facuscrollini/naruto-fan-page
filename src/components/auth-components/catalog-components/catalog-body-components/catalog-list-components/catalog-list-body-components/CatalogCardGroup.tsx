import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useAuth } from "../../../../../../hooks/useContext/useAuth"
import { useNaruto } from "../../../../../../hooks/useContext/useNaruto"

type Props = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  quantityOfPages: number,
  setQuantityOfPages: Dispatch<SetStateAction<number>>
}

export const CatalogCardGroup = ({ page, setPage, setQuantityOfPages }: Props) => {


  const quantityPerPage = 16

  const { store } = useNaruto()
  const { catalog } = useAuth()



  const createListForCatalog = (from: number, to: number) => {
    return store[catalog!]?.slice(from, to)
  }

  const [listItems, setListItems] = useState(createListForCatalog(0, quantityPerPage))


  useEffect(() => {
    if (page > 1) {
      setListItems(createListForCatalog(quantityPerPage * (page - 1), quantityPerPage * page))
    }
  }, [page])


  useEffect(() => {
    setListItems(createListForCatalog(0, quantityPerPage))
    console.log("Cambió el catalogo")
    setQuantityOfPages(Math.ceil(store[catalog!]?.length! / quantityPerPage))
    setPage(1)
  }, [catalog])


  return (
    <div className="bg-blue-400">
      {listItems?.map((item) => {
        return <p>{item.name}</p>
      })}

    </div>
  )
}
