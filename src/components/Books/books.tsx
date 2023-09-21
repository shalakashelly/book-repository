import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { TBook } from '../../types/books';
import { fetchAllBooks } from '../../services';

const Books = () => {
    const [books, setBooks] = useState<TBook[] | undefined | null>(null);

    useEffect(() => {
        fetchAllBooks()
        .then(data => {
            setBooks(data);
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
        });
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
  