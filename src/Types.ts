export interface TBookObject {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export interface TQuery {
  title: string;
  author: string;
  genre: string;
}

export interface TBook {
  id: string;
  title: string;
  authors: string[];
  image: string;
  description: string;
}
