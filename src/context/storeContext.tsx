import { createContext, useState } from "react";

type CharacterType = {
  id: number;
  name: string;
  images: string[];
};

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
