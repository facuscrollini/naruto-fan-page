import {  URL_GET_PAGE_LIMIT } from "./urls"





export const getPageAndLimit = async(type:string, limit:number)=>{
    const response = await fetch(URL_GET_PAGE_LIMIT(type, limit))
    const data = await response.json()
    return data[type]
}