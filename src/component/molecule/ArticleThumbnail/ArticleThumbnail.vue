<style src="./ArticleThumbnail.scss" module lang="scss"></style>
<script src="./ArticleThumbnail.js"></script>

<template>
  <div :class="[$style.articleThumbnail]">
    <img
      :src="image"
      alt=""
    >
    <h5>{{ title }}</h5>
    <ArticleInfo
      :class="$style.info"
      :author="author"
      :subject="subject"
      :date="date"
    />
    <p>
      {{ description }}
    </p>
  </div>
</template>
