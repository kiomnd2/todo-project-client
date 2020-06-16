import axios from 'axios';

//로그인 수행


const executeLogin = (form) => {
  //id : password
  return axios.post('/api/user/login', form);
};

const executeRegister = (form) => {
  return axios.post('/api/user/register', form);
};

export { executeLogin, executeRegister };
