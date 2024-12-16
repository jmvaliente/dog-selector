import { fetcher } from './fetcher.js';

const {VITE_DOGS_URL_BASE_API, VITE_DOGS_BREEDS_LIST_API} = import.meta.env;
  
export const getAllBreeds = () => fetcher(`${VITE_DOGS_URL_BASE_API}${VITE_DOGS_BREEDS_LIST_API}`);