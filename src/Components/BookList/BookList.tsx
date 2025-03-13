import "./BookList.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../store/favorites-slice";
import { RootState } from "../../store/store";

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  );
  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="book-grid">
        {books.length > 0
          ? books.map((book) => (
              // <Link to={`/book/${book.id}`}>
              <div key={book.id} className="book-card">
                {book.image && (
                  <Link to={`/book/${book.id}`}>
                    <img
                      className="book-image"
                      src={book.image}
                      alt={book.title}
                    />
                  </Link>
                )}
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">
                    {book.authors?.join(", ") || "Unknown Author"}
                  </p>
                  <div className="book-description">
                    {book.description || "No Date Available"}
                  </div>
                </div>
                <div className="add-favorite">
                  <button
                    className="add-favorite-btn"
                    onClick={() => dispatch(addFavorite(book))}
                  >
                    ❤️ Add to Favorites
                  </button>
                </div>
              </div>
              // </Link>
            ))
          : status != "loading" && !error && <p>No books found.</p>}
      </div>
    </div>
  );
};
export default BookList;
