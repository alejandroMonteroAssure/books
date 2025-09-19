import type { Book } from "../BookCardInList/BookCardInList";
import './BookDetail.css'

export default function BookDetail({book}: {book: Book}){
    return(
        <div className="detail-card">
          <img className="cover" src={book.url} alt="Book cover"/>

          <div className="detail">
            <h2 className="detail__title">{book.title}</h2>
            <p className="detail__meta">{book.author}</p>

            <ul className="tags">
                {book.tags!.map((tag) =>(
                    <li>{tag}</li>
                ))}
              <li>Revolutions</li>
            </ul>

            <p className="detail__desc">
              {book.description}
            </p>
          </div>
        </div>
    )
}