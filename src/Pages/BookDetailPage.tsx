// src/components/BookDetails.tsx
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useParams } from "react-router-dom";
import { TBook } from "../Types";
import "./BookDetailPage.css";
import Loader from "../Components/Loader/Loader";

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  );
  const searchedBooks = useMemo(() => books, [books]); //Reduces unnecessary renders of components that use books
  const book = searchedBooks.find((b: TBook) => b.id === id);
  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="book-details-container">
      <img src={book.image} alt={book.title} className="book-detail-image" />
      <div className="book-detail-info">
        <h2 className="book-detail-title">{book.title}</h2>
        <h3 className="book-detail-authors">{book.authors.join(", ")}</h3>
        <p className="book-detail-description">{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetailPage;
