import { useContext } from "react";
import { AppContext } from "../config";
import { Stores } from "../stores";
import { RootStore } from "../stores/RootStore";

export function useStore(store: keyof Stores): Stores[typeof store] {
  return useContext<RootStore>(AppContext).stores[store];
}
