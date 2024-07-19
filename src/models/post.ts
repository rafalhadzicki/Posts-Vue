export type PostResponse = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type PostPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Post = PostResponse & {
  url: string;
  thumbnailUrl: string;
};
