const getFromApi = function (endpoint, query) {
  const url = new URL(`https://api.spotify.com/v1/${endpoint}`);
  Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
  return fetch(url).then(function (response) {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });
};


const artist;
const getArtist = function (name) {
  // Edit me!
};
//fetch(url).then(res => res.json()).then( /* actually do stuff! */);
