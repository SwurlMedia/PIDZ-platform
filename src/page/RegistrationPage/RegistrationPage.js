import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import { mapActions } from 'vuex';
import RegistrationPageTransitionController from './RegistrationPageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';
import BtnLightFlat from '../../component/atom/BtnLightFlat';
import ProfileImgSelector from '../../component/molecule/ProfileImgSelector';
import { SIGN_UP } from '../../store/module/user/user';

// @vue/component
export default {
  name: 'RegistrationPage',
  components: {
    BtnPrimaryFlat,
    BtnLightFlat,
    ProfileImgSelector,
  },
  extends: AbstractPageScrollComponent,
  data() {
    return {
      general: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        profileImgUrl: null,
      },
      occupation: {
        educationLevel: '',
        study: '',
        speciality: '',
        yearsExperience: '',
      },
      security: {
        password: '',
        repeatPassword: '',
      },
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new RegistrationPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
    handleProfileImgUploaded(url) {
      this.general.profileImgUrl = url;
    },
    handleSignUp() {
      const { general, occupation, security } = this;
      console.log({
        general: {
          ...general,
          dateOfBirth: new Date(general.dateOfBirth),
        },
        occupation,
        security,
      });

      this.signUp({
        details: {
          general: {
            ...general,
            dateOfBirth: new Date(general.dateOfBirth),
          },
          occupation,
        },
        password: security.password,
      })
        .then(() => {
          this.$router.push({ name: this.RouteNames.HOME });
        })
        .catch(err => console.error(err));
    },
    ...mapActions({
      signUp: SIGN_UP,
    }),
  },
};
