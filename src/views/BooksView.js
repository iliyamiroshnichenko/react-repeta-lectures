import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BooksView = ({ match }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get('http://localhost:3001/books');
      setBooks(res.data);
    }
    fetchdata();
  }, []);
  return (
    <>
      <h1>Это страница книг</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`${match.url}/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksView;
