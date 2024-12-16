import { fetcher } from './fetcher.js';
  
export const getImagesByBreed = (breed) => fetcher(`${import.meta.env.VITE_DOGS_URL_BASE_API}breed/${breed}/images`);