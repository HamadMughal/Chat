import axios from 'axios';
import {ApiUrl} from '../constents/ApiUrl';

export const instance = axios.create({
  baseURL: ApiUrl.baseUrl,
});
