import axios from 'axios';

const axiosInstance = axios.create();

class heroes_Superpower {
    getHeroSuperpower(){
       return axiosInstance.get('/api/heroes_superpower');
    
      }
}

export default new heroes_Superpower();