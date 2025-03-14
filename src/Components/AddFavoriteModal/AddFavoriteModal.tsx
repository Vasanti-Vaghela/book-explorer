import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../store/favorites-slice";
import { TBook } from "../../Types";
import "./AddFavoriteModal.css";

interface AddFavoriteModalProps {
  book: TBook | null;
  onClose: () => void;
  isOpen: boolean;
}

const AddFavoriteModal: React.FC<AddFavoriteModalProps> = ({
  book,
  onClose,
  isOpen,
}) => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState("");

  if (!book) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addFavorite({
        ...book,
        notes,
        tags: tags.split(",").map((tag) => tag.trim()),
      })
    );
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-hidden={!isOpen}
    >
      <div className="modal-content">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <h2 id="modal-title">Add to Favorites</h2>
        <p id="modal-description">
          You can add notes or tags to this favorite book.
        </p>

        <form onSubmit={handleSubmit} className="favorite-form">
          <label>Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />

          <label>Tags (comma separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <button type="submit">Save to Favorites</button>
        </form>
      </div>
    </div>
  );
};

export default AddFavoriteModal;
