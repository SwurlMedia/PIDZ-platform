import { AbstractScrollComponent } from 'vue-transition-component';
import Draggable from 'gsap/Draggable';
import gsap, { Expo } from 'gsap';
import * as InertiaPlugin from '../../../vendor/InertiaPlugin';
import RecommendationCarouselTransitionController from './RecommendationCarouselTransitionController';
import ArticleThumbnail from '../../molecule/ArticleThumbnail';

// @vue/component
export default {
  name: 'RecommendationCarousel',
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
  data() {
    return {
      currentSlide: 1,
      totalSlides: 1,
    };
  },
  async mounted() {
    await this.createDraggableCarousel();
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new RecommendationCarouselTransitionController(this);
      this.isReady();
    },
    createDraggableCarousel() {
      this.currentSlide = 1;

      gsap.registerPlugin(Draggable, InertiaPlugin);

      const { carousel, carouselItem } = this.$refs;

      this.carousel = carousel;
      [this.carouselItem] = carouselItem;

      Draggable.create(carousel, {
        type: 'x',
        inertia: true,
        bounds: {
          minX: 0,
          maxX: -carousel.scrollWidth + this.carouselItem.offsetWidth,
        },
        onThrowComplete: this.updateSlideNumber,
        snap(value) {
          return Math.round(value / carouselItem[0].offsetWidth) * carouselItem[0].offsetWidth;
        },
      });

      this.totalSlides = this.carousel.scrollWidth / carouselItem[0].offsetWidth;
    },
    prev() {
      if (this.currentSlide > 1) {
        const currentPosition = gsap.getProperty(this.carousel, 'x');
        const itemWidth = this.carouselItem.offsetWidth;

        gsap.to(this.carousel, {
          duration: 1,
          x: currentPosition + itemWidth,
          ease: Expo.easeInOut,
        });

        this.currentSlide = this.currentSlide - 1;
      }
    },
    next() {
      if (this.currentSlide < this.totalSlides) {
        const currentPosition = gsap.getProperty(this.carousel, 'x');
        const itemWidth = this.carouselItem.offsetWidth;

        gsap.to(this.carousel, {
          duration: 1,
          x: currentPosition - itemWidth,
          ease: Expo.easeInOut,
        });

        this.currentSlide = this.currentSlide + 1;
      }
    },
    updateSlideNumber() {
      const currentPosition = gsap.getProperty(this.carousel, 'x');
      this.currentSlide = Math.round((currentPosition * -1) / this.carouselItem.offsetWidth) + 1;
    },
  },
};
