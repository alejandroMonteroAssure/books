import type { Book } from "../BookCardInList/BookCardInList";
import BookCardInList from "../BookCardInList/BookCardInList";
import './BooksList.css';

interface Books{
    books: Book[];
}

export default function BooksList({books}: Books){
    return (
        <>
            <h1 className="site-logo">The bookshelf</h1>
            <div className="books-container">
                <div className="books-grid">
                    {books.map((book) => (
                        <BookCardInList
                            key={book.bookId}
                            url={book.url}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            bookId={book.bookId}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}