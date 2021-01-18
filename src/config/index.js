export const BACKEND_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://team3pixel.herokuapp.com';
