import { fetcher } from './fetcher.js';

const { VITE_DOGS_URL_BASE_API } = import.meta.env;
  
export const getImagesByBreed = (breed) => fetcher(`${VITE_DOGS_URL_BASE_API}breed/${breed}/images`);