import React, { useState } from "react";
import "./SearchForm.css"; // Import the CSS file

interface TQuery {
  title: string;
  author: string;
  genre: string;
}

const SearchForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState(""); // Error message state

  const handleSearch = (query: TQuery) => {
    console.log("Search Query:", query);
    // Implement search functionality here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if at least one field is filled
    if (!title.trim() && !author.trim() && !genre.trim()) {
      setError("Please fill in at least one field before searching.");
      return;
    }

    setError(""); // Clear error if validation passes
    handleSearch({ title, author, genre });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      {/* Show error message */}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre/Keyword:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Enter genre or keyword"
        />
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
