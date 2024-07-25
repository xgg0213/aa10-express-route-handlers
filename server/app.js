
// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here 
// basic phase 1:
app.use(express.json());

// comment below out to not have to console log anything
// ok to leave as well as next() gets to the next section
// app.use((req, res, next) => {
//   console.log('Request Body:', req.body);
//   next();
// });

// basic phase 2:
// get all artists
app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.status(200).send(artists);
})
// add an artist
app.post('/artists', (req, res) => {
  // req.body = JSON.stringify({
  //   "name": "Led Zeppelin"
  // })
  const resBody = addArtist(req.body);
  res.status(201).send(resBody);
})


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}