import User from '../../../data/User';

const namespace = 'user';

const SET_USER = `${namespace}/setUser`;
const RESET_USER = `${namespace}/resetUser`;

export const SIGN_IN = `${namespace}/signIn`;
export const SIGN_OUT = `${namespace}/signOut`;
export const SIGN_UP = `${namespace}/signUp`;

export default {
  state: {
    user: {
      general: {
        firstName: '',
        lastName: '',
        email: '',
        uid: '',
        dateOfBirth: new Date(''),
        profileImgUrl: undefined,
      },
      occupation: {
        educationLevel: 'other',
        study: undefined,
        speciality: undefined,
        yearsExperience: 0,
      },
    },
  },
  getters: {},
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
    [RESET_USER](state) {
      state.user = {
        general: {
          firstName: '',
          lastName: '',
          email: '',
          uid: '',
          dateOfBirth: new Date(''),
          profileImgUrl: undefined,
        },
        occupation: {
          educationLevel: 'other',
          study: undefined,
          speciality: undefined,
        },
      };
    },
  },
  actions: {
    async [SIGN_IN](context, payload) {
      const user = await User.signIn(payload.email, payload.password);
      context.commit(SET_USER, user);

      return user;
    },
    async [SIGN_OUT](context) {
      await User.signOut();
      context.commit(RESET_USER);
    },
    async [SIGN_UP](context, payload) {
      const user = await User.signUp(payload);
      context.commit(SET_USER, user);

      return user;
    },
  },
};
