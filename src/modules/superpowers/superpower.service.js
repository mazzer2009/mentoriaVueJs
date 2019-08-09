import axios from 'axios';

const axiosInstance = axios.create();

class SuperpowerService {
    getAllSuperpowers() {
        return axiosInstance.get('/api/superpower');
    }
}

export default new SuperpowerService();