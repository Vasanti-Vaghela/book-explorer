import "./BookList.css";
import { TBook } from "../Types";
import { useNavigate } from "react-router-dom";

interface TBookLListProps {
  books: TBook[];
  error: string;
  loading: boolean;
}

const BookList: React.FC<TBookLListProps> = ({ books, error, loading }) => {
  const navigate = useNavigate();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="book-grid">
        {books.length > 0
          ? books.map((book) => (
              // <Link to={`/book/${book.id}`}>
              <div
                key={book.id}
                className="book-card"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    className="book-image"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                )}
                <div className="book-info">
                  <h3 className="book-title">{book.volumeInfo.title}</h3>
                  <p className="book-author">
                    {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                  </p>
                  <div className="book-description">
                    {book.volumeInfo.description || "No Date Available"}
                  </div>
                </div>
                <div className="add-favorite">
                  <button className="add-favorite-btn">
                    ❤️ Add to Favorites
                  </button>
                </div>
              </div>
              // </Link>
            ))
          : !loading && !error && <p>No books found.</p>}
      </div>
    </div>
  );
};
export default BookList;
