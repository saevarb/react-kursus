export interface ImgurResponse<T> {
  data: T[];
  success: boolean;
  status: number;
}

export interface GalleryResponse {
  id: string;
  title: string;
  description: null;
  datetime: number;
  cover?: string;
  cover_width?: number;
  cover_height?: number;
  account_url: string;
  account_id: number;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote: null;
  favorite: boolean;
  nsfw: boolean;
  comment_count: number;
  favorite_count: number;
  topic_id: number;
  images_count?: number;
  in_gallery: boolean;
  is_ad: boolean;
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads?: boolean;
  images?: Image[];
  type?: Type;
  animated?: boolean;
  width?: number;
  height?: number;
  size?: number;
  bandwidth?: number;
  has_sound?: boolean;
  edited?: number;
  mp4?: string;
  gifv?: string;
  hls?: string;
  mp4_size?: number;
  looping?: boolean;
}

export interface Image {
  id: string;
  title: null;
  description: null | string;
  datetime: number;
  type: Type;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: null;
  favorite: boolean;
  nsfw: null;
  section: null;
  account_url: null;
  account_id: null;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
  comment_count: null;
  favorite_count: null;
  ups: null;
  downs: null;
  points: null;
  score: null;
  mp4_size?: number;
  mp4?: string;
  gifv?: string;
  hls?: string;
  looping?: boolean;
}

export enum Type {
  ImageGIF = "image/gif",
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  VideoMp4 = "video/mp4"
}

export class ImgurService {
  constructor(private apiKey: string) {}

  fetchGallery = async (
    name: string
  ): Promise<ImgurResponse<GalleryResponse>> => {
    const res = await fetch(`https://api.imgur.com/3/gallery/${name}`, {
      headers: {
        Authorization: `Client-ID ${this.apiKey}`
      }
    });
    return res.json();
  };
}
