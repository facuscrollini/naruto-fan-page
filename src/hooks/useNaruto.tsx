import { useContext } from "react"
import { NarutoContext } from "../context/narutoContext"

export const useNaruto = () =>{
    const context = useContext(NarutoContext)
    if(!context){
        throw new Error ('useNaruto must be used within an NarutoProvider')
    }
    return context
}