import type { Dispatch } from "react"
import { useSave } from "./useSave"
import type { ActionType } from "./reducer/useNarutoReducer"

export type SaveType = {
    type: string,
    count:number
}


export const useSaveAll = (dispatch: Dispatch<ActionType>) =>{
    const listOfSaves:SaveType[] = [
        {type: "CHARACTERS", count: 1431},
        {type: "AKATSUKI", count: 44},
        {type: "VILLAGES", count: 39},
        {type: "CLANS", count: 58},
        {type: "TEAMS", count: 191},
        {type: "TAILED-BEASTS", count: 10},
        {type: "KEKKEI-GENKAI", count: 39},
    ]
   listOfSaves.forEach(save=> useSave(save.type, save.count, dispatch) )
}