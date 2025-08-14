export const URL_GET_INDIVIDUAL = (type:string, id:number) => `https://dattebayo-api.onrender.com/${type}/${id}`
export const URL_GET_PAGE = (type:string, page:number) =>  `https://dattebayo-api.onrender.com/${type}/?page=${page}`
export const URL_GET_PAGE_LIMIT = (type: string, limit:number) => `https://dattebayo-api.onrender.com/${type}/?limit=${limit}`
