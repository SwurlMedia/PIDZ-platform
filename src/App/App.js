import Vue from 'vue';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState } from 'vuex';
import {
  FlowManager,
  AbstractRegistrableComponent,
  ScrollTrackerPlugin,
} from 'vue-transition-component';
import { SET_DEVICE_STATE } from '../store/module/app/app';
// @vue/component
export default {
  name: 'App',
  extends: AbstractRegistrableComponent,
  computed: {
    ...mapState({
      deviceState: state => state.app.deviceState,
    }),
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
    this.setDeviceState(this.$deviceStateTracker.currentState);
  },
  mounted() {
    Vue.use(ScrollTrackerPlugin, {
      config: {
        setDebugLabel: process.env.NODE_ENV !== 'production',
      },
    });
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
    }),
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
    onLeave(element, done) {
      window.scrollTo(0, 0);

      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};
