import { useEffect } from "react"
import { useAuth } from "../../../../../hooks/useContext/useAuth"
import { IndividualCatalogButton } from "./IndividualCatalogButton"

export const CatalogIndividualContent = () => {

  const { catalogItem } = useAuth()

const truncatedWord = (word:string = "No description", spaces:number) =>{
  return word.slice(0,spaces) + "..."
}



  return (
    <div className="relative h-full bg-gradient-to-t to-[#ba8d6b] from-[#dbb5a5] flex flex-col justify-end items-center pb-[10rem]">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={catalogItem.image} />
      </div>
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-400/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
    <p className="text-orange-100 text-center font-semibold text-[5rem] mb-3 truncate">{catalogItem.name}</p>
    {catalogItem.description && 
    <div className="bg-stone-300/50 p-3 rounded-lg w-fit">
    <p className="text-orange-100 ">{truncatedWord(catalogItem?.description, 60)}</p>
    </div>
    }
      </div>
    <IndividualCatalogButton/>
    </div>
  )
}
