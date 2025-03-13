import BookList from "../Components/BookList/BookList";
import SearchForm from "../Components/SearchForm/SearchForm";
import { useState } from "react";
import { TBook, TQuery } from "../Components/Types";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (query: TQuery) => {
    setLoading(true);
    setError("");

    let searchQuery = "";

    if (query.title) searchQuery += `intitle:${query.title}+`;
    if (query.author) searchQuery += `inauthor:${query.author}+`;
    if (query.genre) searchQuery += `subject:${query.genre}`;

    searchQuery = searchQuery.trim().replace(/\+$/, ""); // Remove trailing `+` if any

    const apiUrl = `${BASE_URL}${searchQuery}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      console.log("DATA", data);
      setBooks(data.items || []);
    } catch (err) {
      console.log(err);
      setError("An error occurred while fetching books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={fetchBooks} />
      <BookList books={books} error={error} loading={loading} />
    </div>
  );
};
export default HomePage;
