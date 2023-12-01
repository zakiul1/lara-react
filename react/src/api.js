import axios from 'axios';

// Set default base URL
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.withCredentials=true;
// Set default headers
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Set default timeout
axios.defaults.timeout = 5000; // 5 seconds

// Create an Axios instance with default configurations
const axiosInstance = axios.create();

// Now, you can use axiosInstance for your requests, and it will inherit the default configurations

export default axiosInstance;
