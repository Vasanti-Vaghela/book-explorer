import "./BookList.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import BookCard from "../BookCard/BookCard";
import { useMemo } from "react";
import Loader from "../Loader/Loader";

const BookList: React.FC = () => {
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  );
  const searchedBooks = useMemo(() => books, [books]); //Reduces unnecessary renders of components that use books

  return (
    <div>
      {status === "loading" && <Loader />}
      {error && <p className="error-message">{error}</p>}
      <div className="book-grid" role="list">
        {searchedBooks.length > 0 &&
          books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};
export default BookList;
