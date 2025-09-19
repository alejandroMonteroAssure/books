import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import BookDetail from "./BookDetail";
import type { Book } from "../BookCardInList/BookCardInList";

export default function BookDetailRoute({books}: {books: Book[]}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);
  const book = books.find(b => b.bookId === numericId);
  const isInvalid = Number.isNaN(numericId) || !book;

  useEffect(() => {
    if(isInvalid){
        navigate("/404");
    }
  }, [isInvalid, navigate]);

  if(isInvalid) return null;

  return <BookDetail book={book} />;
}