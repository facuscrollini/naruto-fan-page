import { useEffect, useState } from "react"
import type { CatalogMenuType } from "./CatalogList"

export const Filter = ({openMenu, setOpenMenu}:CatalogMenuType) => {
  
  const type = "filter"
  const [thisMenu, setThisMenu] = useState(false)
  
  const handleClick= () => {
  openMenu == type ? setOpenMenu(undefined) : setOpenMenu(type)
  }

  useEffect(() => {
      setThisMenu(openMenu == type)
    })

  return (

   
      <div className={`${thisMenu && "flex-grow"} transition-all duration-1000 flex bg-amber-300`}>
        <p className={`${!thisMenu && "hidden"}`}>Filter</p>
      <button type="button" onClick={handleClick} title="Customize your list" className="hover:cursor-pointer  bg-emerald-200  rounded-sm">
      <i className="fa-solid fa-sliders"></i>
      </button>
      </div> 
    

  )
}
