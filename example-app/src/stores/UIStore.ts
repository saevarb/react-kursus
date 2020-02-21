import { observable } from "mobx";
import { RootStore } from "./RootStore";

export interface User {
  username: string;
  email: string;
}

export class UIStore {
  constructor(private rootStore: RootStore) {}
  @observable
  currentUser?: User;
}
