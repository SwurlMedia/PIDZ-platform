import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import { mapActions } from 'vuex';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { email, required, confirmed, numeric } from 'vee-validate/dist/rules';
import RegistrationPageTransitionController from './RegistrationPageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';
import BtnLightFlat from '../../component/atom/BtnLightFlat';
import ProfileImgSelector from '../../component/molecule/ProfileImgSelector';
import { SIGN_UP } from '../../store/module/user/user';

extend('email', {
  ...email,
  message: 'Geen geldig email adres',
});

extend('required', {
  ...required,
  message: 'Dit veld is verplicht',
});

extend('confirmed', {
  ...confirmed,
  message: 'Het wachtwoord moet gelijk zijn',
});

extend('numeric', {
  ...numeric,
  message: 'Moet een nummer zijn',
});

// @vue/component
export default {
  name: 'RegistrationPage',
  components: {
    BtnPrimaryFlat,
    BtnLightFlat,
    ProfileImgSelector,
    ValidationProvider,
    ValidationObserver,
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

      this.signUp({
        details: {
          general: {
            ...general,
            dateOfBirth: new Date(general.dateOfBirth),
          },
          occupation: {
            ...occupation,
            yearsExperience: Number(occupation.yearsExperience),
          },
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
