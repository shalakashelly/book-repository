import { TBook } from '../../types/books';

interface BookCardProps {
    book: TBook;
}

export default function BookCard({ book }: BookCardProps) {

    return (
        <div className="book">
            <img src="../images/book.jpg"
                alt=""
                className="book-image" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    );
};
  