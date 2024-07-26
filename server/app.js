
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

// bonus
// get latest artist
app.get('/artists/latest', (req, res) => {
  const latestArtist = getLatestArtist();
  res.status(200).send(latestArtist);
})

// Get all albums of the latest artist
app.get('/artists/latest/albums', (req, res) => {
  const albums = getAlbumsForLatestArtist();
  res.status(200).send(albums);
})

// Edit a specified artist by artistId
app.put('/artists/:artistId', (req, res) => {
  const id = req.params.artistId;
  const data = req.body;
  const returnData = editArtistByArtistId(id, data);
  res.status(200).send(returnData);
})

// Delete a specified artist by artistId
app.delete('/artists/:artistId', (req, res) => {
  const id = req.params.artistId;
  deleteArtistByArtistId(id);
  res.status(200).send({
    "message": "Successfully deleted"
  })
})

// Get all albums of a specific artist based on artistId
app.get('/artists/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;
  const data = getAlbumsByArtistId(artistId);
  res.status(200).send(data);
})

// Get a specific album's details based on albumId
app.get('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const data = getAlbumByAlbumId(albumId);
  res.status(200).send(data);
})

// Add an album to a specific artist based on artistId
app.post('/artists/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;
  const data = req.body;
  const returnData = addAlbumByArtistId(artistId, data);
  res.status(201).send(returnData);
})

// Edit a specified album by albumId
app.put('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const data = req.body;
  const returnData = editAlbumByAlbumId(albumId, data);
  res.status(200).send(returnData)
})

app.patch('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const data = req.body;
  const returnData = editAlbumByAlbumId(albumId, data);
  res.status(200).send(returnData)
})

// Delete a specified album by albumId
app.delete('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  deleteAlbumByAlbumId(albumId);
  res.status(200).send({
    "message": "Successfully deleted"
  })
})

// Get all albums with names filtered by first letter
app.get('/albums', (req, res) => {
  const startsWith = req.query.startsWith;
  const returnData = getFilteredAlbums(startsWith);
  res.status(200).send(returnData);
})

// Get a specific song's details based on songId

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}