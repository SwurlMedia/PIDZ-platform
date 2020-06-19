import { AbstractScrollComponent } from 'vue-transition-component';
import RecentArticlesOverviewTransitionController from './RecentArticlesOverviewTransitionController';
import ArticleThumbnail from '../../molecule/ArticleThumbnail';

// @vue/component
export default {
  name: 'RecentArticlesOverview',
  components: {
    ArticleThumbnail,
  },
  extends: AbstractScrollComponent,
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new RecentArticlesOverviewTransitionController(this);
      this.isReady();
    },
  },
};
