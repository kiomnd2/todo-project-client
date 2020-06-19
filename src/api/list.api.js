import axios from 'axios'

const ListService = class {
    getAllList(userId) {
        return axios.post('/api/list/getAll', {userId});
    };

    RegisterList(form) {
        return axios.post('/api/list/register', form);
    };

    ModifyList(form) {

    }
}

export default new ListService;
export {ListService}