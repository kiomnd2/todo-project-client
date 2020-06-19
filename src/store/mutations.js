const setUserState = (state, payload) => {
  state.userState.userId = payload.userId;
  state.userState.userNm = payload.userNm;
  state.userState.email = payload.email;
};

export default { setUserState };
