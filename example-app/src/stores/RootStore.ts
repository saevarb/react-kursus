import { Services } from "../services";
import { Stores } from ".";

export class RootStore {
  public services: Services;
  public stores: Stores;
  constructor(
    services: Services,
    initializeStores: (root: RootStore) => Stores
  ) {
    this.services = services;
    this.stores = initializeStores(this);
  }
}
