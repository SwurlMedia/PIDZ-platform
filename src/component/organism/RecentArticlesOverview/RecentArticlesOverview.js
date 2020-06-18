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
  data() {
    return {
      articles: [
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
      this.transitionController = new RecentArticlesOverviewTransitionController(this);
      this.isReady();
    },
  },
};
