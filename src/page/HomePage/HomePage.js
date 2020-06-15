import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import HomePageTransitionController from './HomePageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';
import BtnSecondaryFlat from '../../component/atom/BtnSecondaryFlat';
import BtnLightFlat from '../../component/atom/BtnLightFlat';
import Hero from '../../component/organism/Hero';

// @vue/component
export default {
  name: 'HomePage',
  components: {
    BtnPrimaryFlat,
    BtnSecondaryFlat,
    BtnLightFlat,
    Hero,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomePageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
