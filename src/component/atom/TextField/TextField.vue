<style src="./TextField.scss" module lang="scss"></style>
<script src="./TextField.js"></script>

<template>
  <label :class="$style.textField">
    <span :class="$style.copy">{{ label }}</span>
    <span :class="$style.inputWrapper">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
      <button
        v-if="ctaCopy"
        class="btn"
        type="button"
        @click="handleCTAClick"
      >{{ ctaCopy }}</button>
    </span>
  </label>
</template>
