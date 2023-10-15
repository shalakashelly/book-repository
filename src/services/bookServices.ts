import { TBook } from "../types/books";
import { GET_ALL_BOOKS } from "./constants";

export const fetchAllBooks = async (): Promise<TBook[]> => {
    const response = await fetch(GET_ALL_BOOKS);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: TBook[] = await response.json();
    return data;
};
