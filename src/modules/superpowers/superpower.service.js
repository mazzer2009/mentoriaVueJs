import axios from 'axios';

const axiosInstance = axios.create();

class SuperpowerService {
    getAllSuperpowers() {
        return axiosInstance.get('/api/superpower');
    }
    getSuperpowersByHero(id){
        return axiosInstance.get('/api/superpower/' + id)
    }
    updateSuperpoderById(objeto){
        return axiosInstance.put(`/api/superpower/${objeto.id}`,(objeto));
    }
}

export default new SuperpowerService();