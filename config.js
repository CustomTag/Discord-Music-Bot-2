
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	"TOKEN": process.env.TOKEN,
	"YOUTUBE_API_KEY": process.env.YOUTUBE_API_KEY,
	"MAX_PLAYLIST_SIZE": 10,
	"PREFIX": "!",
	"MUSIC_CHANNEL_ID": process.env.MUSIC_CHANNEL_ID
};