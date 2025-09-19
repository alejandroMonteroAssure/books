import './Book.css';
import { Link } from 'react-router-dom';

export interface Book{
    url: string;
    title: string;
    author: string;
    description: string;
    bookId: number;
    tags?: string[];
}

export default function BookCardInList({url, title, author, description, bookId}: Book){
    return (
        <div className="book-card" key={bookId}>
          <img src={url} alt=""/>
          <div className="data">
            <h3 className="title">{title}</h3>
            <p className="author">{author}</p>
            <p className="description">{description}</p>
            <Link className="btn" to={`/books/${bookId}`}>Give it a look</Link>
          </div>
        </div>
    )
}