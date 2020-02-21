import {
  ImgurService,
  GalleryReponse,
  ImgurResponse
} from "../services/ImgurService";
import { RootStore } from "./RootStore";
import { observable, flow, computed } from "mobx";

export class ImgurStore {
  @observable
  public galleries: Map<string, Map<string, GalleryReponse>> = new Map();

  constructor(private rootStore: RootStore) {}

  loadGallery = flow(function* loadGallery(this: ImgurStore, name: string) {
    const imgur = this.rootStore.services.imgurService;
    const result: ImgurResponse<GalleryReponse> = yield imgur.fetchGallery(
      name
    );

    const gallery = this.galleries.get(name);

    if (gallery != undefined) {
      // We have already loaded this gallery before. Update it instead of creating a new one
      for (const response of result.data) {
        gallery.set(response.id, response);
      }
    } else {
      // We haven't loaded this gallery before. Create a new one, fill it and insert into galleries
      const newGallery: Map<string, GalleryReponse> = new Map();
      for (const response of result.data) {
        newGallery.set(response.id, response);
      }
      this.galleries.set(name, newGallery);
    }
  });

  // Returns an array of tuples of [gallery name, number of images in gallery]
  @computed
  get loadedGalleries(): Array<[string, number]> {
    return Array.from(this.galleries.entries()).map(([name, gallery]) => [
      name,
      gallery.size
    ]);
  }
}
