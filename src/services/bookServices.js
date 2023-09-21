import { GET_ALL_BOOKS } from "./CONSTANTS";

export const fetchAllBooks = async () => {
    console.log("bookServices > getAllBooks called...");
    try {
        const response = await fetch(GET_ALL_BOOKS);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
};
