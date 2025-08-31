import { useState, type Dispatch, type SetStateAction } from "react"
import { CatalogListHeader } from "../catalog-body-components/catalog-list-components/CatalogListHeader"
import { CatalogListBody } from "../catalog-body-components/catalog-list-components/CatalogListBody"
import { useAuth } from "../../../../hooks/useContext/useAuth"

export type CatalogMenuType = {
    openMenu:string | undefined,
    setOpenMenu: Dispatch<SetStateAction<string |undefined>>
}

export const CatalogList = () => {

    const { catalog } = useAuth()


    return (

        <div className="bg-gray-200 col-span-3  rounded-xl p-2">
            <CatalogListHeader/>
            <CatalogListBody/>
        </div>

    )
}