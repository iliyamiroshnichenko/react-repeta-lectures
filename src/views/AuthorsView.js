import { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import AuthorBooks from '../components/AuthorBooks/AuthorBooks';

const AuthorsView = ({ match }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get('http://localhost:3001/authors?_embed=books');
      setAuthors(res.data);
    }
    fetchdata();
  }, []);
  return (
    <>
      <h1>Это страница авторов</h1>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
          </li>
        ))}
      </ul>
      <Route
        path={`${match.path}/:authorId`}
        render={props => {
          const authorId = Number(props.match.params.authorId);
          const author = authors.find(({ id }) => id === authorId);
          return author && <AuthorBooks {...props} books={author.books} />;
        }}
      />
    </>
  );
};

export default AuthorsView;
