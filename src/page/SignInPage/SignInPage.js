import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import { mapActions, mapState } from 'vuex';
import SignInPageTransitionController from './SignInPageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';
import { SIGN_IN } from '../../store/module/user/user';

// @vue/component
export default {
  name: 'SignInPage',
  components: {
    BtnPrimaryFlat,
  },
  extends: AbstractPageScrollComponent,
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SignInPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
    handleSignIn() {
      this.signIn({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          // TODO: implement route change
          console.log(this.user);
        })
        // TODO: implement proper error handling
        .catch(err => console.error(err));
    },
    ...mapActions({
      signIn: SIGN_IN,
    }),
  },
};
