import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export const sendAnswers = async (body) => {
  try {
    const response = await api.post('/answers', body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
