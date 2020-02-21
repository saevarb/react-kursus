import React from "react";
import { Services } from "./services";
import { Stores } from "./stores";
import { RootStore } from "./stores/RootStore";
import { UIStore } from "./stores/UIStore";
import { ImgurService } from "./services/ImgurService";

const clientId: string = "043ca82ed4e9ba9";

function initializeServices(): Services {
  return {
    imgurService: new ImgurService(clientId)
  };
}

// We use inversion of control here to avoid circular dependencies
// That is, if RootStore has to know about(= import) each individual store type
// and each individual store has to know about the root store
function initializeStores(x: RootStore): Stores {
  return {
    uiStore: new UIStore(x)
  };
}

export function initializeRootStore(): RootStore {
  return new RootStore(initializeServices(), initializeStores);
}

export const AppContext: React.Context<RootStore> = React.createContext(
  initializeRootStore()
);
