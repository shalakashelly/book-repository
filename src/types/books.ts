export type TBook = {
  id: number,
  title: string,
  author: string,
  publisher?: string,
  publicationDate?: number,
  isbn?: string,
  description: string,
  coverImage: string,
  categories: string[],
  tags: string[]
}
