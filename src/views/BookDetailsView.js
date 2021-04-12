import { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetailsView = ({ match }) => {
  const [book, setBook] = useState({
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  });
  const { descr, imgUrl, title, author } = book;
  const { bookId } = match.params;

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(
        `http://localhost:3001/books/${bookId}?_expand=author`,
      );
      setBook({ ...res.data });
    }
    fetchdata();
  }, []);

  return (
    <>
      <h1>Это страница одной книги {bookId}</h1>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      {author && <p>Автор: {author.name}</p>}
      <p>{descr}</p>
    </>
  );
};

export default BookDetailsView;
