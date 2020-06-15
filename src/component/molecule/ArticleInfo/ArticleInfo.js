import { AbstractScrollComponent } from 'vue-transition-component';
import ArticleInfoTransitionController from './ArticleInfoTransitionController';

// @vue/component
export default {
  name: 'ArticleInfo',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleInfoTransitionController(this);
      this.isReady();
    },
  },
};
