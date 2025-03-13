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
              <p className="favorite-title">{book.title}</p>
              <button
                className="remove-button"
                onClick={() => dispatch(removeFavorite(book.id))}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
