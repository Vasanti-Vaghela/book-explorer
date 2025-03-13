import BookList from "../Components/BookList/BookList";
import SearchForm from "../Components/SearchForm/SearchForm";

const HomePage: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <BookList />
    </div>
  );
};
export default HomePage;
