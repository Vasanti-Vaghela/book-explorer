import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default BookDetailPage;
