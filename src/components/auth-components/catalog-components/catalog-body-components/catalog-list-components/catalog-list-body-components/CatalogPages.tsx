import type { Dispatch, SetStateAction } from "react"

type Props = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  quantityOfPages: number,
  setQuantityOfPages: Dispatch<SetStateAction<number>>
}

export const CatalogPages = ({ page, setPage, quantityOfPages }: Props) => {
 
  const increasePage = () => {
    if (page < quantityOfPages) {
      setPage(prev => prev + 1)
    }
  }

  const decreasePage = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }
  return (
    <div className="flex justify-center gap-10">
      <button onClick={decreasePage} type="button"><i className={`text-[1.5rem] fa-solid fa-angle-left ${page == 1 ? "opacity-20" : "hover:cursor-pointer fa-beat"}`} ></i></button>
      <p className="text-[1.5rem]">{page}</p>
      <button onClick={increasePage} type="button"><i className={`text-[1.5rem] fa-solid fa-angle-right ${page == quantityOfPages ? "opacity-20" : "hover:cursor-pointer fa-beat"}`} ></i></button>
    </div>
  )
}
