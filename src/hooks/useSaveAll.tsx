import type { Dispatch } from "react"
import { useSave } from "./useSave"
import type { ActionType } from "./reducer/useNarutoReducer"

export type SaveType = {
    type: string,
    count:number
}


export const useSaveAll = (dispatch: Dispatch<ActionType>) =>{
    const listOfSaves:SaveType[] = [
        {type: "characters", count: 1431},
        {type: "akatsuki", count: 44},
        {type: "villages", count: 39},
        {type: "clans", count: 58},
        {type: "teams", count: 191},
        {type: "tailed-beasts", count: 10},
        {type: "kekkei-genkai", count: 39},
    ]
   listOfSaves.forEach(save=> useSave(save.type, save.count, dispatch) )
}