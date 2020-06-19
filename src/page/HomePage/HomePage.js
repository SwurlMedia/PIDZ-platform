import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import HomePageTransitionController from './HomePageTransitionController';
import Hero from '../../component/organism/Hero';
import RecommendationCarousel from '../../component/organism/RecommendationCarousel';
import RecentArticlesOverview from '../../component/organism/RecentArticlesOverview';
import dummy from '../../data/dummy.json';

// @vue/component
export default {
  name: 'HomePage',
  components: {
    RecommendationCarousel,
    Hero,
    RecentArticlesOverview,
  },
  extends: AbstractPageScrollComponent,
  data() {
    return {
      data: dummy,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomePageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
