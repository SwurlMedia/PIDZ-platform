import { AbstractScrollComponent } from 'vue-transition-component';
import HeroTransitionController from './HeroTransitionController';
import BtnSecondaryFlat from '../../atom/BtnSecondaryFlat';

// @vue/component
export default {
  name: 'Hero',
  components: {
    BtnSecondaryFlat,
  },
  extends: AbstractScrollComponent,
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    spotlight: Boolean,
    cta: {
      type: Object,
      default: () => {
        return {
          label: null,
          to: null,
        };
      },
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeroTransitionController(this);
      this.isReady();
    },
  },
};
