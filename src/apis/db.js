import axios from 'axios';

export default axios.create({
	baseURL: 'https://meal-app-db.herokuapp.com/',
});
