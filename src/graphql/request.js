import axios from 'axios';

export default function(query) {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:4000/api/article', { query })
      .then(({ data }) => {
        const { errors } = data;

        if (errors) {
          reject(errors);
        }

        resolve(data);
      })
      .catch(error => reject(error));
  });
}
