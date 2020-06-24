import axios from 'axios'

const ListService = class {
    getAllList(userId) {
        return axios.post('/api/list/getAll', {userId});
    };

    RegisterList(form) {
        return axios.post('/api/list/register', form);
    };

    deleteList(form) {
        return axios.post('/api/list/delete', form);
    };

    updateList(form) {
        return axios.post('api/list/update', form);
    }
}

export default new ListService;
export {ListService}