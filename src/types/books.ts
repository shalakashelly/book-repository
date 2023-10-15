export type TBook = {
  id: number,
  title: string,
  author: string,
  publisher?: string,
  publicationDate?: string,
  isbn?: string,
  description: string,
  coverImage: string,
  categories: string[],
  tags: string[]
}
