<style src="./CategoryTag.scss" module lang="scss"></style>
<script src="./CategoryTag.js"></script>

<template>
  <div :class="[$style.categoryTag]">
    <span :class="$style.tag">{{ title }}</span>
  </div>
</template>
