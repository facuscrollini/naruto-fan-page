import { createContext, useReducer, type Dispatch } from "react";
import type { AkatsukiType, CharacterType, SimpleGroupType, TailedBeastType } from "../services/apiTypes";
import { useNarutoReducer, type ActionType } from "../hooks/reducer/useNarutoReducer";



export type NarutoStoreType = {
  villages?: SimpleGroupType[];
  kekkei_genkai?: SimpleGroupType[];
  teams?: SimpleGroupType[];
  clans?: SimpleGroupType[];
  characters?: CharacterType[];
  akatsuki?: AkatsukiType[];
  tailed_beasts?: TailedBeastType[]
};

const initialStore = { characters: [], villages: [], kekkei_genkai: [], teams: [], clans: [], akatsuki: [], tailed_beasts: []  }

type ValueType =  {
  store: NarutoStoreType,
  dispatch: Dispatch<ActionType>
}



export type Props = {
  children: React.ReactNode;
};



export const NarutoContext = createContext<ValueType >({ store : initialStore, dispatch:() => undefined});

export const NarutoStoreProvider = ({ children }: Props) => {
  const [store, dispatch] = useReducer(useNarutoReducer, {})

  return (
    <NarutoContext.Provider value={{store, dispatch}} >
        {children}
    </NarutoContext.Provider>
  );
};
