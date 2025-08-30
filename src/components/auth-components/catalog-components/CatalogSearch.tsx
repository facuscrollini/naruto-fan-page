import { useEffect, useState } from "react"
import type { CatalogMenuType } from "./CatalogList"

export const CatalogSearch = ({ openMenu, setOpenMenu }: CatalogMenuType) => {

  const type = "search"
  const [thisMenu, setThisMenu] = useState(false)


  const handleClick = () => {
    openMenu == type ? setOpenMenu(undefined) : setOpenMenu(type)
  }


  useEffect(() => {
    setThisMenu(openMenu == type)
  })


  return (
    <div className={` ${thisMenu ? "flex-grow min-w-[1vw]" : "w-[2vw]"} transition-all duration-1000 h-[3vh]`}>
      <div className={`relative overflow-hidden w-full  rounded-lg h-full bg-gray-100 transition-all duration-1000`} >
        <input type="text" placeholder={`Search here...`}
          className={`absolute h-full w-[90%] pl-[1vw] left-[vw] ${thisMenu ? "block" : "hidden"} transition-all duration-1000`}
        >
        </input>
        <button type="button"
          title="Customize your list"
          className={`hover:cursor-pointer absolute z-1 ${thisMenu ? "right-0 h-full w-[2vw]" : "inset-0"} bg-pink-400 top-0 right-0  hover:scale-120 transition-all duration-500`}
          onClick={handleClick}
        >
          <i className="fa-solid fa-search"></i>
        </button>
      </div>
    </div>
  )
}
