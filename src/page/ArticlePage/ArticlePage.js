import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import ArticlePageTransitionController from './ArticlePageTransitionController';
import Hero from '../../component/organism/Hero';
import InfoBar from '../../component/molecule/InfoBar';
import RecommendationCarousel from '../../component/organism/RecommendationCarousel';

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
      carouselItems: [
        {
          title: "GGD's maandag nog niet op volle sterkte: 'Streven is test binnen 48 uur'",
          image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          author: 'Tellus Magna',
          subject: 'GGD',
          date: '31 mei',
          description:
            "Hoewel iedereen met corona-achtige klachten vanaf maandag getest mag worden op het coronavirus, draaien de GGD's maandag nog niet op volle capaciteit. Wie maandagmorgen belt voor een…",
          id: Math.random()
            .toString(36)
            .substring(7),
        },
        {
          title: "GGD's maandag nog niet op volle sterkte: 'Streven is test binnen 48 uur'",
          image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          author: 'Tellus Magna',
          subject: 'GGD',
          date: '31 mei',
          description:
            "Hoewel iedereen met corona-achtige klachten vanaf maandag getest mag worden op het coronavirus, draaien de GGD's maandag nog niet op volle capaciteit. Wie maandagmorgen belt voor een…",
          id: Math.random()
            .toString(36)
            .substring(7),
        },
        {
          title: "GGD's maandag nog niet op volle sterkte: 'Streven is test binnen 48 uur'",
          image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          author: 'Tellus Magna',
          subject: 'GGD',
          date: '31 mei',
          description:
            "Hoewel iedereen met corona-achtige klachten vanaf maandag getest mag worden op het coronavirus, draaien de GGD's maandag nog niet op volle capaciteit. Wie maandagmorgen belt voor een…",
          id: Math.random()
            .toString(36)
            .substring(7),
        },
        {
          title: "GGD's maandag nog niet op volle sterkte: 'Streven is test binnen 48 uur'",
          image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          author: 'Tellus Magna',
          subject: 'GGD',
          date: '31 mei',
          description:
            "Hoewel iedereen met corona-achtige klachten vanaf maandag getest mag worden op het coronavirus, draaien de GGD's maandag nog niet op volle capaciteit. Wie maandagmorgen belt voor een…",
          id: Math.random()
            .toString(36)
            .substring(7),
        },
        {
          title: "GGD's maandag nog niet op volle sterkte: 'Streven is test binnen 48 uur'",
          image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          author: 'Tellus Magna',
          subject: 'GGD',
          date: '31 mei',
          description:
            "Hoewel iedereen met corona-achtige klachten vanaf maandag getest mag worden op het coronavirus, draaien de GGD's maandag nog niet op volle capaciteit. Wie maandagmorgen belt voor een…",
          id: Math.random()
            .toString(36)
            .substring(7),
        },
        {
          title: "GGD's maandag nog niet op volle sterkte: 'Streven is test binnen 48 uur'",
          image:
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          author: 'Tellus Magna',
          subject: 'GGD',
          date: '31 mei',
          description:
            "Hoewel iedereen met corona-achtige klachten vanaf maandag getest mag worden op het coronavirus, draaien de GGD's maandag nog niet op volle capaciteit. Wie maandagmorgen belt voor een…",
          id: Math.random()
            .toString(36)
            .substring(7),
        },
      ],
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
