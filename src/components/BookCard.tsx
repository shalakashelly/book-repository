import { useState, useEffect } from 'react';
import { Book } from '../interfaces/books';

const BookCard = () => {
    const [books, setBooks] = useState<Book[]>([]);
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
                <div key={book.id} className="book">
                    <img src="../images/book.jpg"
                        alt={book.title}
                        className="book-image" />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BookCard;
  