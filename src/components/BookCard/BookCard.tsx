import { TBook } from '../../types/books';
import styles from './BookCard.module.scss';

interface BookCardProps {
    book: TBook;
}

export default function BookCard({ book }: BookCardProps) {

    return (
        <div className={styles.book__card}>
            <img src="../images/book.jpg" alt="" className={styles.book__image} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    );
};
  