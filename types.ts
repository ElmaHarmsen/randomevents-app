export interface EventInterface {
  _id: string;
  Title: string;
  Picture?: PictureInterface;
  Date: string;
  Location: string;
  Description: string;
  Contribution: number;
  event_categories: CategoryInterface[];
}

export interface CategoryInterface {
  events: string[];
  Category: string;
}

export interface PictureInterface {
  alternativeText: string;
  updatedAt: string;
  formats: PictureFormatsInterface;
}

export interface PictureFormatsInterface {
  [key: string]: PictureSizeInterface;
}

export interface PictureSizeInterface {
  height: number;
  width: number;
  url: string;
}
