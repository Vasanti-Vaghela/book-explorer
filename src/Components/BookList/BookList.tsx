import "./BookList.css";
import { TBook } from "../Types";

interface TBookLListProps {
  books: TBook[];
  error: string;
  loading: boolean;
}

const BookList: React.FC<TBookLListProps> = ({ books, error, loading }) => {
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="book-list">
        {books.length > 0
          ? books.map((book) => (
              <div key={book.id} className="book-card">
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                )}
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
                <p>{book.volumeInfo.description || "No Date Available"}</p>
              </div>
            ))
          : !loading && !error && <p>No books found.</p>}
      </div>
    </div>
  );
};
export default BookList;
