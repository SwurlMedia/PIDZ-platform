import { AbstractScrollComponent } from 'vue-transition-component';
import RecommendationCarouselTransitionController from './RecommendationCarouselTransitionController';
import ArticleThumbnail from '../../molecule/ArticleThumbnail';

// @vue/component
export default {
  name: 'RecommendationCarousel',
  components: {
    ArticleThumbnail,
  },
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new RecommendationCarouselTransitionController(this);
      this.isReady();
    },
  },
};
