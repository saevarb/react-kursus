import { useContext } from "react";
import { AppContext } from "../config";
import { RootStore } from "../stores/RootStore";
import { Services } from "../services";

export function useService(service: keyof Services): Services[typeof service] {
  return useContext<RootStore>(AppContext).services[service];
}
