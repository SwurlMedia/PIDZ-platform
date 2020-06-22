import { AbstractScrollComponent } from 'vue-transition-component';
import MiscBlockTransitionController from './MiscBlockTransitionController';

// @vue/component
export default {
  name: 'MiscBlock',
  extends: AbstractScrollComponent,
  data() {
    return {
      tags: [
        'GGD',
        'Dermatologie',
        'Diëtetiek',
        'COVID-19',
        'GGZ',
        'Huisarts',
        'Psychiatrie',
        'Orthopedie',
        'Reguliere Zorg',
        'Ouderenzorg',
        'Verpleging',
        'Binnenland',
        'Euthanasie',
        'Preventie',
        'Ziekenhuiszorg',
      ],
      activeTags: [],
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new MiscBlockTransitionController(this);
      this.isReady();
    },
    toggleTag(index) {
      if (this.activeTags.includes(index)) {
        this.activeTags.splice(this.activeTags.indexOf(index), 1);
      } else {
        this.activeTags.push(index);
      }
    },
  },
};
