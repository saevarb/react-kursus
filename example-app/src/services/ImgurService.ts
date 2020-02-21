export interface ImgurResponse<T> {
  data: T[];
}

export interface GalleryReponse {
  id: string;
  title: string;
  description: null;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: null;
  favorite: boolean;
  nsfw: boolean;
  section: string;
  account_url: null;
  account_id: null;
  is_ad: boolean;
  tags: any[];
  in_most_viral: boolean;
  in_gallery: boolean;
  link: string;
  comment_count: null;
  ups: null;
  downs: null;
  points: null;
  score: number;
  is_album: boolean;
}
export class ImgurService {
  constructor(private apiKey: string) {}

  fetchGallery = async (): Promise<ImgurResponse<GalleryReponse>> => {
    const res = await fetch("https://api.imgur.com/3/gallery.json", {
      headers: {
        Authorization: `Client-ID ${this.apiKey}`
      }
    });
    return res.json();
  };
}
