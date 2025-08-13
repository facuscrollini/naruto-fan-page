import type { NarutoStoreType } from "../context/narutoContext";
import type { AkatsukiType, CharacterType, SimpleGroupType, TailedBeastType } from "../services/apiTypes";

export type ActionType = 
| {type: "SAVE_CHARACTERS", payload: CharacterType[]}
| {type: "SAVE_TAILED_BEASTS", payload: TailedBeastType[]}
| {type: "SAVE_AKATSUKI", payload: AkatsukiType[]}
| {type: "SAVE_KEKKEI_GENKAI", payload: SimpleGroupType[]}
| {type: "SAVE_VILLAGES", payload: SimpleGroupType[]}
| {type: "SAVE_CLANS", payload: SimpleGroupType[]}
| {type: "SAVE_TEAMS", payload: SimpleGroupType[]}

export const useNarutoReducer = (state: NarutoStoreType, action: ActionType) =>{

    switch (action.type) {
        case "SAVE_CHARACTERS":
            return {...state, characters: action.payload}

        case "SAVE_TAILED_BEASTS":

            return {...state, tailed_beasts: action.payload}

        case "SAVE_AKATSUKI":
            
            return {...state, akatsuki: action.payload};
        case "SAVE_KEKKEI_GENKAI":
            
            return {...state, kekkei_genkais: action.payload};
        case "SAVE_VILLAGES":
            
            return {...state, villages: action.payload};
        case "SAVE_CLANS":
            
            return {...state, clans: action.payload}
            ;
        case "SAVE_TEAMS":
            
            return {...state, teams: action.payload};
        
        default:
            return state
    }

}