import { useState } from "react"
import { CatalogListNavbarElement } from "./catalog-list-header-components/CatalogListNavbarElement"

export const CatalogListHeader = () => {
  const types = ["search", "filter", "organize"]
  const [openMenu, setOpenMenu] = useState<string | undefined>(undefined)

  return (
    <div className="flex justify-center gap-2">

      {types.map((type) => (
        <CatalogListNavbarElement type={type} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      ))}
    </div>
  )
}
