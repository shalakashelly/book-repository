import { TBook } from "../types/books";
import { GET_ALL_BOOKS } from "./CONSTANTS";

export const fetchAllBooks = async (): Promise<TBook[]> => {
    console.log("bookServices > getAllBooks called...");
    try {
        const response = await fetch(GET_ALL_BOOKS);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: TBook[] = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
