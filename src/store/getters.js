const getCounter = (state) => {
  return state.counter;
};

const getUser = (state) => {
  return state.userState;
}


export default { getCounter, getUser}