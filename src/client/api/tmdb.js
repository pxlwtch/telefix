import request from 'superagent';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function searchAPIWithQuery(q) {
  const query = escapeRegexCharacters(q);
  return new Promise((resolve, reject) => {
    request
      .post(`/api/tmdb`)
      .send({ query })
      .end((error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result.body);
      });
  });
}

export function getTitlesFromSearch(result) {
  return new Promise(resolve => {
    if (!result) resolve([]);
    if (result.total_results) {
      resolve(result.results.slice(0, 10));
    }
    resolve([]);
  });
}

export function getTVShowFromId(id) {
  return new Promise((resolve, reject) => {
    request.get(`/api/tmdb/${id}`).end((error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.body);
    });
  });
}
