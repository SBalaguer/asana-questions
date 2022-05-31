import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // baseURL: "http://localhost:5001",
  withCredentials: true
});

export const sendAnswers = async (body) => {
  let response;
  try {
    response = await api.post('/answers', body);
    return response.data;
  } catch (error) {
    return response.error;
  }
};

export const sendAnswersAnon = async (body) => {
  let response;
  try {
    response = await api.post('/answers-anon', body);
    return response.data;
  } catch (error) {
    return response.error;
  }
};
