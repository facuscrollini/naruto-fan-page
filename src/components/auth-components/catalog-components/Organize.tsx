import { useEffect, useState } from "react"
import type { CatalogMenuType } from "./CatalogList"

export const Organize = ({ openMenu, setOpenMenu }: CatalogMenuType) => {

  const type = "organize"
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
      
      <p className={`transition-all duration-100 overflow-hidden ${thisMenu ? "max-w-full opacity-100" : "max-w-0 hidden"}`}>Organize</p>
      <button type="button" onClick={handleClick} title="Customize your list" className="text-end hover:cursor-pointer  bg-gray-300 rounded-sm">
        <i className="fa-solid fa-table-cells"></i>
      </button>
      </div>
    </div>
  )
}
