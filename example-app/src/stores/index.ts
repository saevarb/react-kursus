import { UIStore } from "./UIStore";
import { ImgurStore } from "./ImgurStore";
// This will include all our stores except the root store
export interface Stores {
  uiStore: UIStore;
  imgurStore: ImgurStore;
}
