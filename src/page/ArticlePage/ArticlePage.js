import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import ArticlePageTransitionController from './ArticlePageTransitionController';
import Hero from '../../component/organism/Hero';
import InfoBar from '../../component/molecule/InfoBar';
import RecommendationCarousel from '../../component/organism/RecommendationCarousel';
import dummy from '../../data/dummy.json';

// @vue/component
export default {
  name: 'ArticlePage',
  components: {
    Hero,
    InfoBar,
    RecommendationCarousel,
  },
  extends: AbstractPageScrollComponent,
  data() {
    return {
      data: dummy,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticlePageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
