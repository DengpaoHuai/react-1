import { create } from "zustand";
import { Wine } from "../schemas/wine.schema";
import { useEffect, useState } from "react";
import { getWines } from "../services/wine.service";
import { createJSONStorage, persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

type WineStore = {
  wines: Wine[];
  setWine: (wines: Wine[]) => void;
};

//singleton
export const useWineStore = create<WineStore>()(
  devtools(
    persist(
      (set) => ({
        wines: [],
        setWine: (wines: Wine[]) => set({ wines }),
      }),
      {
        name: "wine-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);

//export const useWineActions = () => useWineStore((state) => state.actions);

//hook custom
export const useWine = () => {
  const { wines, setWine } = useWineStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getWines().then((response) => {
      setWine(response);
      setIsLoading(false);
    });
  }, []);

  return { wines, isLoading };
};
