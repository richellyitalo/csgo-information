import axios from 'axios';

// const TOKEN = `Bearer ${process.env.REACT_APP_TOKEN_API}`;

// const config = {
//   headers: { Authorization: TOKEN, 'Access-Control-Allow-Origin': '*' },
// };

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  // headers: config.headers,
});

export default api;
