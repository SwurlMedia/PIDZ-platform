<style src="./BtnPrimaryFlat.scss" module lang="scss"></style>
<script src="./BtnPrimaryFlat.js"></script>

<template>
  <router-link
    v-if="to"
    :class="[$style.btnPrimaryFlat]"
    :to="to"
  >
    <slot />
  </router-link>
  <button
    v-else
    :type="type"
    :class="[$style.btnPrimaryFlat]"
  >
    <slot />
  </button>
</template>
