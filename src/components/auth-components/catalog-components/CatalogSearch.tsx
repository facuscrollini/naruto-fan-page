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
    <div className={`${thisMenu && "flex-grow"} transition-all duration-1000 flex bg-amber-300`}>
      <div className={`transition-all duration-1000 flex ${thisMenu ? "justify-between w-full" : " justify-end w-full"}`}>
      
      <input type="text" placeholder={`Search here...`} className={`transition-all duration-100  overflow-hidden ${thisMenu ? "max-w-full opacity-100" : "max-w-0 hidden"}`}></input>
      <button type="button" onClick={handleClick} title="Customize your list" className="text-end hover:cursor-pointer  bg-gray-300 rounded-sm">
        <i className="fa-solid fa-search"></i>
      </button>
      </div>
    </div>
  )
}
