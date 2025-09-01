import type { Dispatch, SetStateAction } from "react"

type Props = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    quantityOfPages: number,
    setQuantityOfPages: Dispatch<SetStateAction<number>>
}

export const CatalogPages = ({page, setPage, quantityOfPages}:Props) => {

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
  return (
    <div className="flex gap-10 bg-red-600">
    <button onClick={decreasePage} type="button"><i className="fa-solid fa-angle-left"></i></button>
        <p>{page}</p>
        <button onClick={increasePage} type="button"><i className="fa-solid fa-angle-right" ></i></button>
    </div>
  )
}
