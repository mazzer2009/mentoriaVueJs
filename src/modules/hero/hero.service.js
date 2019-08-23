import axios from 'axios';

const axiosInstance = axios.create();

class HeroService {
  getAllHeroes() {
    return axiosInstance.get('/api/heroes');
  }
  updateHero(objeto){
    return axiosInstance.put(`/api/heroes/${objeto.id}`,(objeto));
  }
  getHeroById(id){
    return axiosInstance.get('/api/heroes/' + id);
  }
  addHero(objeto){
    return axiosInstance.post(`/api/heroes/`, objeto)
  }
 
}

export default new HeroService();
