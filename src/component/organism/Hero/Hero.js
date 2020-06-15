import { AbstractScrollComponent } from 'vue-transition-component';
import HeroTransitionController from './HeroTransitionController';
import BtnSecondaryFlat from '../../atom/BtnSecondaryFlat';
import ArticleInfo from '../../molecule/ArticleInfo';

// @vue/component
export default {
  name: 'Hero',
  components: {
    BtnSecondaryFlat,
    ArticleInfo,
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
    author: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
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
