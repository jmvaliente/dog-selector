import { fetcher } from './fetcher.js';
  
export const getAllBreeds = () => fetcher(import.meta.env.VITE_DOGS_URL_BASE_API + import.meta.env.VITE_DOGS_BREEDS_LIST_API);