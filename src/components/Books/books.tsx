import BookCard from '../BookCard/BookCard';
import { useBooks } from '../../hooks/useBooks'; // Import the custom hook


const Books = () => {
    const books = useBooks();

    if (!books) {
        return <div className="grid-title">Loading...</div>;
    }

    return (
        <div className="grid--books">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default Books;
  