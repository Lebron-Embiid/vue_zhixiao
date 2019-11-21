const SET_AUTHENTICATED = "SET_AUTHENTICATED";
const SET_USER = "SET_USER";

export default {
//是否授权
  [SET_AUTHENTICATED](state, { isLogin }) {
    if (isLogin) {
      state.isLogin = isLogin;
    } else {
      state.isLogin = false;
    }
  },
  [SET_USER](state, { user }) {
    if (user) {
      state.user = user;
    } else {
      state.user = {};
    }
  },
  [SET_AUTHENTICATED](state) {
    state.isLogin = false; //退出登录
  }
}