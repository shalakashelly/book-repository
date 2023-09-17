import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { TBook } from '../types/books';

const Books = () => {
    const [books, setBooks] = useState<TBook[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBookData = async () => {
        try {
            const response = await fetch('/mockData/books.json');
            const json = await response.json();
            setBooks(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBookData();
    }, []);

    if (isLoading) {
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
  