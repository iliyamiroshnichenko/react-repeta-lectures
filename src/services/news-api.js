import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

axios.defaults.headers.common['Authorization'] =
  'Bearer eeb40ede522f4eeca172d2d6e7658ecb';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(res => res.data.articles);
};

export default { fetchArticles };
