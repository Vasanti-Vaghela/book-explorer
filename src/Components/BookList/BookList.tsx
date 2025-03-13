import "./BookList.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import BookCard from "../BookCard/BookCard";
import { useMemo } from "react";

const BookList: React.FC = () => {
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  );
  const searchedBooks = useMemo(() => books, [books]); //Reduces unnecessary renders of components that use books

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="book-grid">
        {searchedBooks.length > 0
          ? books.map((book) => <BookCard key={book.id} book={book} />)
          : status != "loading" && !error && <p>No books found.</p>}
      </div>
    </div>
  );
};
export default BookList;
