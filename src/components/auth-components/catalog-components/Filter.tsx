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

   <div className={` ${thisMenu ? "flex-grow min-w-[1vw]" : "w-[1vw]"} transition-all duration-1000 `}>
      <div className={`relative overflow-hidden w-full  rounded-lg h-full bg-gray-100 transition-all duration-1000`} >
        <p className={`${thisMenu ? "block w-full text-center" : "hidden"} transition-all duration-1000`}
        >Filter</p>
       
        <button type="button"
          title="Customize your list"
          className="hover:cursor-pointer absolute z-1 w-[1vw] h-full bg-pink-400 top-0 right-0"
          onClick={handleClick}
        >
          <i className="fa-solid fa-sliders hover:scale-120 transition-all duration-500"></i>
        </button>
      </div>
    </div>

  )
}
