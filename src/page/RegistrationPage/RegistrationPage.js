import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import RegistrationPageTransitionController from './RegistrationPageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';
import BtnLightFlat from '../../component/atom/BtnLightFlat';
import ProfileImgSelector from '../../component/molecule/ProfileImgSelector';

// @vue/component
export default {
  name: 'RegistrationPage',
  components: {
    BtnPrimaryFlat,
    BtnLightFlat,
    ProfileImgSelector,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new RegistrationPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
