import { useAuth } from "../../../hooks/useContext/useAuth"

export const CatalogTitle = () =>{

    const {catalog} = useAuth()
    const catalogTitle = catalog?.charAt(0).toUpperCase() + catalog?.slice(1)!

    return (
        <>
        <div>
            <span>
        <p className="text-[5vh]">
            {catalogTitle}
        </p>
            </span>
            </div>
        </>
    )
}