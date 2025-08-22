import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useContext/useAuth"
import { listOfCatalogs } from "../../navbar-components/CategoriesMenu"

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
    <div className="bg-amber-200 m-3 rounded-2xl overflow-hidden">
      <div className="relative h-[70vh] group">
        <img className="w-full h-full transition-all duration-1000 group-hover:grayscale-50 object-cover object-bottom" src={`../../../../public/img/${previewData?.type == "kekkei genkai" ? previewData?.type + ".jpg" : previewData?.type + ".png"}`} />
        <div className="absolute  transition-all opacity-0 group-hover:opacity-100 bg-linear-to-t from-black to-transparent duration-1000  inset-0">
          <div className="absolute left-1/16 right-1/16 bottom-0 group-hover:bottom-1/8 opacity-0 transition-all duration-1000 group-hover:opacity-90 text-white text-left">
          <div className="flex justify-between">

          <p className="text-left mb-2 text-[10vh]">{previewData?.title}</p>
          <p>Perros</p>
          </div>
          {previewData?.description}
          </div>
        </div>
      </div>
    </div>
  )
}
