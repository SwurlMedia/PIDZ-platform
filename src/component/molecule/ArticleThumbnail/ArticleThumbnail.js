import { AbstractTransitionComponent } from 'vue-transition-component';
import ArticleThumbnailTransitionController from './ArticleThumbnailTransitionController';
import ArticleInfo from '../ArticleInfo';

// @vue/component
export default {
  name: 'ArticleThumbnail',
  components: {
    ArticleInfo,
  },
  extends: AbstractTransitionComponent,
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
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
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    verified: Boolean,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleThumbnailTransitionController(this);
      this.isReady();
    },
  },
};
