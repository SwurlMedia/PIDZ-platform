import { AbstractTransitionComponent } from 'vue-transition-component';
import ArticleThumbnailTransitionController from './ArticleThumbnailTransitionController';

// @vue/component
export default {
  name: 'ArticleThumbnail',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleThumbnailTransitionController(this);
      this.isReady();
    },
  },
};
