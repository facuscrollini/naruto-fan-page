import type { Dispatch } from "react";
import { getPageAndLimit } from "../services/apiDattebayo";
import type { ActionType } from "./reducer/useNarutoReducer";

export const useSave = async (type: string, limit: number, dispatch: Dispatch<ActionType>) => {
    switch (type) {
        case "CHARACTERS":
            const characters = await getPageAndLimit(type,  limit)
            dispatch({ type: "SAVE_CHARACTERS", payload: characters })
            break
        case "TAILED-BEASTS":
            const taled_beasts = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_TAILED_BEASTS", payload: taled_beasts })
            break
        case "AKATSUKI":
            const akatsuki = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_AKATSUKI", payload: akatsuki })
            break
        case "KEKKEI-GENKAI":
            const kekkei_genkais = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_KEKKEI_GENKAI", payload: kekkei_genkais })
            break
        case "VILLAGES":
            const villages = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_VILLAGES", payload: villages })
            break
        case "CLANS":
            const clans = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_CLANS", payload: clans })
            break
        case "TEAMS":
            const teams = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_TEAMS", payload: teams })
            break

        default:
            break;
    }
}