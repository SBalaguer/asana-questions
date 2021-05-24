import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL,
//   withCredentials: true
// });
const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
});

export const sendAnswers = async (body) => {
  console.log(api)
  let response;
  try {
    response = await api.post('/answers', body);
    return response.data;
  } catch (error) {
    return response.error;
  }
};
