import { useAuth } from "../../../../../../hooks/useContext/useAuth"
import { useNaruto } from "../../../../../../hooks/useContext/useNaruto"

export const CatalogCardGroup = () => {


    const {store} = useNaruto()
    const {catalog} = useAuth()

    const listItems = store[catalog!]
    console.log(catalog)
    console.log(listItems)

  return (
    <>
    {listItems?.map((item)=>{
      return <p>{item.name}</p>
    })}
    </>
  )
}
