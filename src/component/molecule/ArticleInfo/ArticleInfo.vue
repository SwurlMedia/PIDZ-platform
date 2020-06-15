<style src="./ArticleInfo.scss" module lang="scss"></style>
<script src="./ArticleInfo.js"></script>

<template>
  <div :class="[$style.articleInfo]">
    <span>{{ author }}</span>
    <span>{{ subject }}</span>
    <span>{{ date }}</span>
  </div>
</template>
