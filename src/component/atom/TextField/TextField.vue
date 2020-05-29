<style src="./TextField.scss" module lang="scss"></style>
<script src="./TextField.js"></script>

<template>
  <label :class="$style.textField">
    <span :class="$style.copy">{{ label }}</span>
    <span :class="$style.inputWrapper">
      <input
        :type="type"
        :placeholder="placeholder"
      >
      <button
        v-if="ctaCopy"
        type="button"
        @click="handleCTAClick"
      >{{ ctaCopy }}</button>
    </span>
  </label>
</template>
