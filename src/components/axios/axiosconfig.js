import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODk1ZmE4MWE2NTQwMTlhYmYyZTg3Yjg5YWNhYTRjZCIsInN1YiI6IjY1ZTBkNGQzMzkxYjljMDE4NjgzMDU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QxbUuwEZxtAX6VwI4Dlj88hwOyPn7Ygi2CCc2VQGUMQ',
  },
});
