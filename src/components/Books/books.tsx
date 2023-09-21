import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { TBook } from '../../types/books';

const Books = () => {
    const [books, setBooks] = useState<TBook[] | undefined | null>([]);

    const fetchBookData = async () => {
        try {
            const response = await fetch('/mockData/books.json');
            const json = await response.json();
            setBooks(json);
        } catch (error) {
            console.error('Error fetching data:', error);
            setBooks(null);
        }
    };

    useEffect(() => {
        fetchBookData();
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
  