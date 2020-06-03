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
    <label for="uploadImg">
      <btn-light-flat :class="$style.btn" type="button">
        upload een foto
      </btn-light-flat>
      <input
        id="uploadImg"
        name="uploadImg"
        type="file"
        accept="image/*"
      >
    </label>
  </div>
</template>
z
