import React from "react";
import { Link } from "react-router-dom";
import { TBook } from "../../Types";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../store/favorites-slice";

interface TBookCardProps {
  book: TBook;
}
const BookCard: React.FC<TBookCardProps> = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div key={book.id} className="book-card">
      {book.image && (
        <Link to={`/book/${book.id}`}>
          <img className="book-image" src={book.image} alt={book.title} />
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
  );
};
export default BookCard;
