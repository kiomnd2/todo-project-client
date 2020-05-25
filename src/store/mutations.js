const addCounter = (state, payload) => {
  if (payload.value !== undefined) {
    return (state.counter = payload.value);
  }
  return state.counter++;
};

const setUserState = (state, payload) => {
  state.userState.userId = payload.userId;
  state.userState.userNm = payload.userNm;
  state.userState.email = payload.email;
};

const subCounter = (state) => {
  return state.counter--;
};

export default { addCounter, subCounter ,setUserState };
