import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import gsap from 'gsap';

export default class BtnSecondaryFlatTransitionController extends AbstractTransitionController {
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
  ): void {}

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
  ): void {}

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
