import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-836c9.firebaseio.com/'
});

export default instance;
