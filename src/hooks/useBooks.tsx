import { useState, useEffect } from 'react';
import { fetchAllBooks } from '../services';
import { TBook } from '../types/books';

export function useBooks() {
  const [books, setBooks] = useState<TBook[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllBooks();
        setBooks(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
        setBooks(null);
      }
    }

    fetchData();
  }, []);

  return books;
}
