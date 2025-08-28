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
      <p className={`${!thisMenu && "hidden"}`}>Organize</p>
      <button type="button" onClick={handleClick} title="Customize your list" className={`${thisMenu}hover:cursor-pointer  bg-gray-300 rounded-sm`}>
        <i className="fa-solid fa-table-cells"></i>
      </button>
    </div>
  )
}
