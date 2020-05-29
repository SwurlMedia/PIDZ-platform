import { AbstractTransitionComponent } from 'vue-transition-component';
import TextFieldTransitionController from './TextFieldTransitionController';

// @vue/component
export default {
  name: 'TextField',
  extends: AbstractTransitionComponent,
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new TextFieldTransitionController(this);
      this.isReady();
    },
  },
};
