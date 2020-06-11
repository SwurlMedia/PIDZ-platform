import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import HomePageTransitionController from './HomePageTransitionController';
import RecommendationCarousel from '../../component/organism/RecommendationCarousel';

// @vue/component
export default {
  name: 'HomePage',
  components: {
    RecommendationCarousel,
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
