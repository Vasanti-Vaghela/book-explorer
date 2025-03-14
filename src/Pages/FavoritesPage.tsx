import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFavorite } from "../store/favorites-slice";
import "./Favorites.css";

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  return (
    <div className="favorites-page">
      <h1>Favorite Books</h1>
      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <div className="favorites-container">
          {favorites.map((book) => (
            <div key={book.id} className="favorite-card">
              <img
                src={book.image}
                alt={book.title}
                className="favorite-image"
              />
              <div className="favorite-details">
                <p className="favorite-title">{book.title}</p>
                <p className="favorite-authors">by {book.authors.join(", ")}</p>

                {/* Display Notes if Available */}
                {book.notes && (
                  <p className="favorite-notes">
                    <strong>Notes:</strong> {book.notes}
                  </p>
                )}

                {/* Display Tags if Available */}
                {book.tags && book.tags.length > 0 && (
                  <p className="favorite-tags">
                    <strong>Tags:</strong> {book.tags.join(", ")}
                  </p>
                )}

                <button
                  className="remove-button"
                  aria-label={`Remove ${book.title} from favorites`}
                  onClick={() => dispatch(removeFavorite(book.id))}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
