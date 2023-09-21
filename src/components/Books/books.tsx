import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { TBook } from '../../types/books';
import { fetchAllBooks } from '../../services';

const Books = () => {
    const [books, setBooks] = useState<TBook[] | undefined | null>();

    useEffect(() => {
        async function fetchData() {
            try {
              const data = await fetchAllBooks();
              setBooks(data);
            } catch (error) {
              console.log("Error fetching data: ", error);
              setBooks(null);
            }
        }

        fetchData();
    }, []);

    if (!books) {
        return <div className="grid-title">Loading...</div>;
    }

    return (
        <div className="grid-container">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default Books;
  