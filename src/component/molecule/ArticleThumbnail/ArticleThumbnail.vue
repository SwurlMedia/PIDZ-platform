<style src="./ArticleThumbnail.scss" module lang="scss"></style>
<script src="./ArticleThumbnail.js"></script>

<template>
  <div :class="[$style.articleThumbnail]">
    <img
      src="https://via.placeholder.com/360"
      alt=""
    >
    <h5>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</h5>
    <div :class="$style.info">
      <span>Lorem Fringilla</span>
      <span>Condimentum</span>
      <span>20 Mei</span>
    </div>
    <p>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id
      ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
      dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus
      varius blandit sit amet non magna.
    </p>
  </div>
</template>
