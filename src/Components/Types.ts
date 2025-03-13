export interface TBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
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
