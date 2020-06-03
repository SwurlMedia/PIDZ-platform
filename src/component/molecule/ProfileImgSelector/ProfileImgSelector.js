import { AbstractTransitionComponent } from 'vue-transition-component';
import firebase from 'firebase/app';
import 'firebase/storage';
import ProfileImgSelectorTransitionController from './ProfileImgSelectorTransitionController';
import BtnLightFlat from '../../atom/BtnLightFlat';

// @vue/component
export default {
  name: 'ProfileImgSelector',
  components: {
    BtnLightFlat,
  },
  extends: AbstractTransitionComponent,
  data() {
    return {
      uploadedImage: null,
      loading: false,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ProfileImgSelectorTransitionController(this);
      this.isReady();
    },
    upload() {
      this.loading = true;
      const file = this.$refs.file.files[0];
      const randomString = Math.random()
        .toString(36)
        .substring(7);

      const ref = firebase.storage().ref(`profile-images/${randomString}-${file.name}`);

      ref
        .put(file)
        .then(snapshot => snapshot.ref)
        .then(() => ref.getDownloadURL())
        .then(url => {
          this.$emit('upload', url);
          this.uploadedImage = url;
        })
        .catch(err => console.error(err))
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
