<style src="./ArticleInfo.scss" module lang="scss"></style>
<script src="./ArticleInfo.js"></script>

<template>
  <div :class="[$style.articleInfo]">
    <span>{{ author }}</span>
    <span>{{ subject }}</span>
    <span>{{ date }}</span>
    <div :class="$style.verified">
      <template v-if="verified">
        <Icon name="check-circle" />
        <span :class="$style.label">
          Dit artikel is geverifieerd
        </span>
      </template>
      <template v-else>
        <Icon name="warn-circle" />
        <span :class="$style.label">
          Dit artikel is nog niet geverifieerd
        </span>
      </template>
    </div>
  </div>
</template>
