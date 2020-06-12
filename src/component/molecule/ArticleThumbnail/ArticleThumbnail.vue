<style src="./ArticleThumbnail.scss" module lang="scss"></style>
<script src="./ArticleThumbnail.js"></script>

<template>
  <div :class="[$style.articleThumbnail]">
    <img src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
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
