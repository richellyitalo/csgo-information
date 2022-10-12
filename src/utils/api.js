import axios from 'axios';

const TOKEN = `Bearer ${process.env.REACT_APP_TOKEN_API}`;

const config = {
  headers: { Authorization: TOKEN },
  'Access-Control-Allow-Origin': '*',
};

const api = axios.create({
  baseURL: 'https://api.pandascore.co/csgo',
  headers: config.headers,
});

export default api;
