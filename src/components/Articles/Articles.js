import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer eeb40ede522f4eeca172d2d6e7658ecb';

class Articles extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
  };
  componentDidMount() {
    axios
      .get('https://newsapi.org/v2/everything?q=react&pageSize=5')
      .then(({ data: { articles } }) => {
        console.log(articles);
        this.setState({ articles: articles });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=5&page=${currentPage}`,
      )
      .then(({ data: { articles } }) => {
        this.setState(prState => ({
          articles,
          currentPage: prState.currentPage + 1,
        }));
      });
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <h1>Статьи</h1>
        <SearchForm onSubmit={this.onChangeQuery} />
        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchArticles}>
          Загрузить еще
        </button>
        <br />
        <br />
      </>
    );
  }
}

const ArticlesFunc = () => {
  return (
    <>
      <h1>Статьи</h1>
      <ul></ul>
    </>
  );
};

export { Articles, ArticlesFunc };
