 const getFromApi = function (endpoint, query={}) {
   const url = new URL(`https://api.spotify.com/v1/${endpoint}`);
   Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
   return fetch(url).then(function (response) {
     if (!response.ok) {
       return Promise.reject(response.statusText);
     }
     return response.json();
   });
 };

 let artist = {};
 const getArtist = function (name) {
   //Make a call to the search endpoint using the getFromApi function.
   const query = {
     q: name,
     limit: 1,
     type: 'artist'
   }
   let endpoint = 'search';
   return getFromApi(endpoint, query).then(response => {
     artist = response.artists.items[0];
     return artist;
     }).then(response =>{
       let endpoint = `artists/${artist.id}/related-artists`;
      return getFromApi(endpoint)
    }).then(response => {
      console.log(response)
    }).catch(err => {
     console.error(err)
   });

//
 };
//Use .then to add a callback which will run when getFromApi resolves.


//fetch(url).then(res => res.json()).then( /* actually do stuff! */);
