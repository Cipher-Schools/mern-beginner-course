const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Albums { name: tracks: songs: [ { name: , artist: }]}

const SongListSchema = new Schema({
    artist: String,
    title: String
})

const AlbumSchema = new Schema({
    name: String,
    tracks: Number,
    songs: [SongListSchema]
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;


