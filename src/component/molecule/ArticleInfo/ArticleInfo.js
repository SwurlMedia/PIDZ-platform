import { AbstractScrollComponent } from 'vue-transition-component';
import ArticleInfoTransitionController from './ArticleInfoTransitionController';

// @vue/component
export default {
  name: 'ArticleInfo',
  extends: AbstractScrollComponent,
  props: {
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
    verified: Boolean,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleInfoTransitionController(this);
      this.isReady();
    },
  },
};
