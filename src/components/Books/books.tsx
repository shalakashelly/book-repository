import BookCard from '../BookCard/BookCard';
import { useEffect, useState } from 'react';
import { fetchAllBooks } from '../../services';
import { TBook } from '../../types/books';
import logger from '../../utils/logger';
import styles from '../../App.module.scss';

const Books = () => {
  const [books, setBooks] = useState<TBook[] | undefined | null>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllBooks();
        setBooks(data);
      } catch (error) {
        logger.log('Error fetching data: ', error);
        setBooks(null);
      }
    }

    fetchData();
  }, []);

  if (books === undefined) {
    return <div className={styles.grid__title}>Loading...</div>;
  }

  if (books === null) {
    return <div className={styles.grid__title}>Sorry, no books found!</div>;
  }

  return (
    <div className={styles.books}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
