import { observable, action, computed } from "mobx";
import { RootStore } from "./RootStore";
import { GalleryResponse } from "../services/ImgurService";

export interface User {
  username: string;
  email: string;
}

export class UIStore {
  constructor(private rootStore: RootStore) {}
  @observable
  public currentUser?: User;

  @observable
  private selectedGalleryName?: string;

  @action
  public selectGallery(name: string) {
    this.selectedGalleryName = name;
  }

  @computed
  get selectedGallery(): GalleryResponse[] | undefined {
    // If no gallery is selected, we have nothing to return
    if (this.selectedGalleryName === undefined) {
      return;
    }
    const gallery = this.rootStore.stores.imgurStore.galleries.get(
      this.selectedGalleryName
    );
    return gallery
      ? Array.from(gallery.values()).filter(x => x.images !== undefined)
      : undefined;
  }
}
