import { createContext, useState } from "react";
import type { CharacterType } from "../services/apiTypes";



type StoreType = {
  characters: CharacterType[];
};

export type Props = {
  children: React.ReactNode;
};

export const StoreContext = createContext<StoreType>({ characters: [] });

export const StoreProvider = ({ children }: Props) => {
  const [store, setStore] = useState<StoreType>({ characters: [] });

  return (
    <StoreContext.Provider value={store} >
        {children}
    </StoreContext.Provider>
  );
};
