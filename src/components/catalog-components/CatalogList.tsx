import { useEffect } from "react"
import { useNaruto } from "../../hooks/useContext/useNaruto"

export const CatalogList = () =>{

const {store} = useNaruto()



useEffect(()=>{
console.log(store)
}, [store])
    return (
        <>
        <div>
Hola soy catalogo
        </div>
        </>
    )
}