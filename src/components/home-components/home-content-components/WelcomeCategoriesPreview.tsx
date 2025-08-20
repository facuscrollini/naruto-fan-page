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



  useEffect(()=>{
  setPreviewData(listOfCatalogs.find((element)=> element.type == catalog ))
  },[catalog])



  useEffect(()=>{
console.log(previewData)
  }, [previewData])



  return (
    <div className="bg-amber-200 border border-amber-400 m-3">La categoria es {catalog}
      <div>
        <div>{previewData?.title}</div>
        <div>{previewData?.type}</div>
        <div><img src={previewData?.image}/></div>
        <div>{previewData?.description}</div>
      </div>
    </div>
  )
}
