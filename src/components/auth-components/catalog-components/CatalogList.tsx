import { useState, type Dispatch, type SetStateAction } from "react"
import { useAuth } from "../../../hooks/useContext/useAuth"
import { CatalogSearch } from "./CatalogSearch"
import { Filter } from "./Filter"
import { Organize } from "./Organize"

export type CatalogMenuType = {
    openMenu:string | undefined,
    setOpenMenu: Dispatch<SetStateAction<string |undefined>>
}

export const CatalogList = () => {

    const { catalog } = useAuth()

    const [openMenu, setOpenMenu] = useState<string | undefined>(undefined)


    return (

        <div className="bg-gray-200 col-span-3  rounded-xl p-2">
            <div className="flex justify-center">

                <CatalogSearch openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <Filter  openMenu={openMenu} setOpenMenu={setOpenMenu}  />
                <Organize  openMenu={openMenu} setOpenMenu={setOpenMenu}  />

            </div>
        </div>

    )
}