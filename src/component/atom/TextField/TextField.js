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
    ctaCopy: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    ctaIcon: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new TextFieldTransitionController(this);
      this.isReady();
    },
    handleCTAClick() {
      this.$emit('submit');
    },
  },
};
