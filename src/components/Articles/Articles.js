import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import newsApi from '../../services/news-api';

class Articles extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };
  // componentDidMount() {
  //   axios
  //     .get('https://newsapi.org/v2/everything?q=react&pageSize=5')
  //     .then(({ data: { articles } }) => {
  //       console.log(articles);
  //       this.setState({ articles: articles });
  //     });
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      articles: [],
      currentPage: 1,
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };
    this.setState({ isLoading: true });

    newsApi
      .fetchArticles(options)
      .then(articles => {
        this.setState(prState => ({
          articles: [...prState.articles, ...articles],
          currentPage: prState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreBtn = articles.length > 0 && !isLoading;
    return (
      <>
        <h1>Статьи</h1>
        {error && <h2>Ой, ошибка, все пропало (((</h2>}
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        {isLoading && <h2>Loading...</h2>}
        {shouldRenderLoadMoreBtn && (
          <button type="button" onClick={this.fetchArticles}>
            Загрузить еще
          </button>
        )}
        <br />
        <br />
      </>
    );
  }
}

export default Articles;
