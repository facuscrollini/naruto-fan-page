import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useContext/useAuth"
import { listOfCatalogs } from "../../navbar-components/CategoriesMenu"
import { PreviewImage } from "./preview-components/PreviewImage"
import { PreviewText } from "./preview-components/PreviewText"

interface PreviewDataType {
  type?: string,
  title?: string,
  image?: string,
  description?: string
}


export const WelcomeCategoriesPreview = () => {



  const { catalog } = useAuth()
  const [previewData, setPreviewData] = useState<PreviewDataType | undefined>({})



  useEffect(() => {
    setPreviewData(listOfCatalogs.find((element) => element.type == catalog))
  }, [catalog])





  return (
    <div className="h-[50vh] rounded-2xl overflow-hidden">
      <label className="relative group hover:cursor-pointer">
        <input type="checkbox" className="peer" hidden></input>
        <PreviewImage type={previewData?.type} />
        <div className="absolute max-lg:peer-checked:opacity-100 sm:opacity-0 group-hover:opacity-100 bg-linear-to-t from-black to-transparent transition-all lg:duration-1000  inset-0"></div>
        <div className="absolute left-1/16 right-1/16 max-lg:peer-checked:opacity-100 bottom-1/8 lg:bottom-0 group-hover:bottom-1/8 sm:opacity-0 transition-all duration-1000 group-hover:opacity-90 text-white text-left">
        <PreviewText type={previewData?.type!} title={previewData?.title} description={previewData?.description} />
        </div>
      </label>
    </div>
  )
}
