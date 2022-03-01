import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const headers = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token
    }
  };
};
