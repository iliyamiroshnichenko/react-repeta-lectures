import { Link, Route } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <>
      <h2>Компонент книг автора </h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorBooks;
