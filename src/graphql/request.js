import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:4000/api';

export const axiosRequest = ({ query, url }) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/${url}`, { query })
      .then(({ data }) => {
        const { errors } = data;

        if (errors) {
          reject(errors);
        }

        resolve(data);
      })
      .catch(error => reject(error));
  });

export const articleRequest = ({ query, url = '' }) =>
  axiosRequest({
    query,
    url: `/article${url}`,
  });

export default axiosRequest;
