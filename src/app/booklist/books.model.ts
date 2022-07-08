export interface Book {
    id: string | undefined;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}