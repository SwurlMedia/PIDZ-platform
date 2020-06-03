import { AbstractTransitionComponent } from 'vue-transition-component';
import ProfileImgSelectorTransitionController from './ProfileImgSelectorTransitionController';
import BtnLightFlat from '../../atom/BtnLightFlat';

// @vue/component
export default {
  name: 'ProfileImgSelector',
  components: {
    BtnLightFlat,
  },
  extends: AbstractTransitionComponent,
  data() {
    return {
      uploadedImage: null,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ProfileImgSelectorTransitionController(this);
      this.isReady();
    },
  },
};
