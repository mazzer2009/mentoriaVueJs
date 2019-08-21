import axios from 'axios';

const axiosInstance = axios.create();

class HeroService {
  getAllHeroes() {
    return axiosInstance.get('/api/heroes');
  }
  updateHero(objeto){
    console.log("Passou aki" + objeto.id);
    return axiosInstance.put('/api/heroes/' + objeto.id, JSON.stringify(objeto));
  }
}

export default new HeroService();
