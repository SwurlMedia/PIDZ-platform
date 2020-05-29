<style src="./TextField.scss" module lang="scss"></style>
<script src="./TextField.js"></script>

<template>
  <label :class="$style.textField">
    <span :class="$style.copy">{{ label }}</span>
    <input
      :type="type"
      :placeholder="placeholder"
    >
  </label>
</template>
