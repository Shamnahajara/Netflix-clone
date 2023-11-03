import axios from 'axios';
import { baseURL } from './src/constants/constants';

const instance = axios.create({
    baseURL: baseURL,
   
  });

  export default instance;