<style src="./ProfileImgSelector.scss" module lang="scss"></style>
<script src="./ProfileImgSelector.js"></script>

<template>
  <div :class="[$style.profileImgSelector]">
    <img
      v-if="uploadedImage"
      :src="uploadedImage"
      alt="user-image-placeholder"
    >
    <img
      v-else
      src="../../../asset/svg/profileImgPlaceholder.svg"
      alt="user-image"
    >
    <btn-light-flat
      v-if="loading"
      :class="$style.btn"
      type="button"
      disabled
    >
      even geduld a.u.b...
    </btn-light-flat>
    <label
      v-else
      for="uploadImg"
    >
      <btn-light-flat
        :class="$style.btn"
        type="button"
        v-if="uploadedImage"
      >
        upload een andere foto
      </btn-light-flat>
      <btn-light-flat
        :class="$style.btn"
        v-else
        type="button"
      >
        upload een foto
      </btn-light-flat>
      <input
        id="uploadImg"
        ref="file"
        name="uploadImg"
        type="file"
        accept="image/*"
        @change="upload"
      >
    </label>
  </div>
</template>
z
