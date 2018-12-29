import axios from "axios";

const KEY = 'AIzaSyBE9rOM820pV7bQYJFDdXG5K5Smq3kyzdA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 15,
		key: KEY
	}
});