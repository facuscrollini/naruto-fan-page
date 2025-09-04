import { useAuth } from "../../../../../hooks/useContext/useAuth"

export const CatalogIndividualContent = () => {

  const {catalogItem} = useAuth()

  return (
    <div className="relative h-full  bg-gradient-to-t to-[#ba8d6b] from-[#dbb5a5]">
        <div className="absolute inset-0" >
           <img className="w-full h-full object-cover"src={catalogItem.image} />
        </div>
    </div>
  )
}
