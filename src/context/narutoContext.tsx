import { createContext, useState } from "react";
import type { AkatsukiType, CharacterType, SimpleGroupType, TailedBeastType } from "../services/apiTypes";



type NarutoStoreType = {
  villages?: SimpleGroupType[];
  kekkei_genkai?: SimpleGroupType[];
  teams?: SimpleGroupType[];
  clans?: SimpleGroupType[];
  characters?: CharacterType[];
  akatsuki?: AkatsukiType[];
  tailed_beasts?: TailedBeastType[]
};

export type Props = {
  children: React.ReactNode;
};



export const NarutoContext = createContext<NarutoStoreType>({ characters: [] });

export const NarutoStoreProvider = ({ children }: Props) => {
  const [store, setStore] = useState<NarutoStoreType>({ characters: [] });

  return (
    <NarutoContext.Provider value={store} >
        {children}
    </NarutoContext.Provider>
  );
};
