import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import ArticlePageTransitionController from './ArticlePageTransitionController';
import Hero from '../../component/organism/Hero';
import InfoBar from '../../component/molecule/InfoBar';

// @vue/component
export default {
  name: 'ArticlePage',
  components: {
    Hero,
    InfoBar,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticlePageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
