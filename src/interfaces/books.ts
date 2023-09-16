import { Category, Tags } from '../types/books'

export interface IBook {
    id: number,
    title: string,
    author: string,
    publisher?: string,
    publication_date?: string,
    isbn?: string,
    description: string,
    cover_image: string,
    categories: Category[],
    tags: Tags[]
}
