import axios from 'axios';

const axiosInstance = axios.create();

class HeroService {
  getAllHeroes() {
    return axiosInstance.get('/api/heroes');
  }
}

export default new HeroService();
