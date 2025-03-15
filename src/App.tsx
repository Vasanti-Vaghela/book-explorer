import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Favorites from "./Pages/FavoritesPage";
import Loader from "./Components/Loader/Loader";

const BookDetailPage = lazy(() => import("./Pages/BookDetailPage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
