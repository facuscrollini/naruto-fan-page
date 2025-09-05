import { useEffect } from "react"
import { useAuth } from "../../../../../hooks/useContext/useAuth"

export const CatalogIndividualContent = () => {

  const { catalogItem } = useAuth()



  return (
    <div className="relative h-full  bg-gradient-to-t to-[#ba8d6b] from-[#dbb5a5]">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={catalogItem.image} />
      </div>
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-400/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <p className="text-orange-100 text-center font-semibold text-[3rem] mb-3">{catalogItem.name}</p>
    <div className="bg-stone-300/50 p-3 rounded-lg">

    <p className="text-orange-100 ">{catalogItem.description}</p>
    </div>
      </div>
    </div>
  )
}
