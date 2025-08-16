import type { Dispatch } from "react";
import { getPageAndLimit } from "../services/apiDattebayo";
import type { ActionType } from "./reducer/useNarutoReducer";

export const useSave = async (type: string, limit: number, dispatch: Dispatch<ActionType>) => {
    switch (type) {
        case "characters":
            const characters = await getPageAndLimit(type,  limit)
            dispatch({ type: "SAVE_CHARACTERS", payload: characters })
            break
        case "tailed-beasts":
            const taled_beasts = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_TAILED_BEASTS", payload: taled_beasts })
            break
        case "akatsuki":
            const akatsuki = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_AKATSUKI", payload: akatsuki })
            break
        case "kekkei-genkai":
            const kekkei_genkais = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_KEKKEI_GENKAI", payload: kekkei_genkais })
            break
        case "villages":
            const villages = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_VILLAGES", payload: villages })
            break
        case "clans":
            const clans = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_CLANS", payload: clans })
            break
        case "teams":
            const teams = await getPageAndLimit(type, limit)
            dispatch({ type: "SAVE_TEAMS", payload: teams })
            break

        default:
            break;
    }
}