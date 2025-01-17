import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import gsap, { Expo } from 'gsap';

export default class RegistrationPageTransitionController extends AbstractTransitionController {
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(
    timeline: gsap.core.Timeline,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {
    const el = parent.$el.querySelectorAll('aside h5, main label, button, a, img, p');

    timeline
      .from(parent.$el, {
        duration: 1,
        autoAlpha: 0,
        ease: Expo.easeOut,
      })
      .from(
        el,
        {
          duration: 1,
          y: 50,
          autoAlpha: 0,
          ease: Expo.easeOut,
          clearProps: 'all',
          stagger: 0.1,
        },
        '=-0.5',
      );
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(
    timeline: gsap.core.Timeline,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {
    timeline.to(parent.$el, 1, {
      autoAlpha: 0,
      ease: Expo.easeOut,
    });
  }

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(
    timeline: gsap.core.Timeline,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {}
}
