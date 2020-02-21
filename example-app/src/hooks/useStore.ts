import { useContext } from "react";
import { AppContext } from "../config";
import { Stores } from "../stores";
import { RootStore } from "../stores/RootStore";

export function useStore<K extends keyof Stores>(store: K): Stores[K] {
  return useContext<RootStore>(AppContext).stores[store];
}
