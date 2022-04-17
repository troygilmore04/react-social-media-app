import axios from 'axios';

const url = 'http://localhost:5500/posts';

const fetchPosts = () => axios.get(url);