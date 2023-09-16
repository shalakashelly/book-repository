import { IBook } from '../interfaces/books';

const BookCard = (key: any, book: IBook) => {

    return (
        <div key={key} className="book">
            <img src="../images/book.jpg"
                alt={book.title}
                className="book-image" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    );
};

export default BookCard;
  