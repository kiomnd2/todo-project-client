import axios from 'axios';

//로그인 수행


const executeLogin = (form) => {
  //id : password
  return axios.post('/api/user/login', form);
};

const executeLogout = (form) => {
  return axios.post('/api/logout');
}

const executeRegister = (form) => {
  return axios.post('/api/user/register', form);
};

export { executeLogin, executeRegister,executeLogout };
