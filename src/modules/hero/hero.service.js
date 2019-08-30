import axios from 'axios';

const axiosInstance = axios.create();

class HeroService {
  getAllHeroes() {
    return axiosInstance.get('/api/heroes');
  }

  updateHero(objeto) {
    return axiosInstance.put(`/api/heroes/${objeto.id}`, objeto);
  }

  getHeroById(id) {
    return axiosInstance.get(`/api/heroes/${id}`);
  }

  deletHeroById(id){
    return axiosInstance.delete(`/api/heroes/${id}`);
  }

  addHero(objeto) {
    return axiosInstance.post('/api/heroes/', objeto);
  }

  addSupertPower(payload) {
    return axiosInstance.post('/api/heroes_superpower', payload);
  }

  updateSupertPower(payload) {
    return axiosInstance.put(`/api/heroes_superpower/${payload.id}`, payload);
  }
}

export default new HeroService();
