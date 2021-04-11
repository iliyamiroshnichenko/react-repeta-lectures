import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="Navlink"
            activeClassName="Navlink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="Navlink"
            activeClassName="Navlink--active"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="Navlink"
            activeClassName="Navlink--active"
          >
            Books
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books" component={BooksView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
