import { URL_GET_GROUP, URL_GET_INDIVIDUAL } from "./urls"

export const getGroup = async(type:string) =>{
const response = await fetch(URL_GET_GROUP(type))
const data = await response.json()
return data
}

export const getIndividual = async(type:string,id:number) =>{
    const response = await fetch(URL_GET_INDIVIDUAL(type, id))
    const data = await response.json()
    return data
}