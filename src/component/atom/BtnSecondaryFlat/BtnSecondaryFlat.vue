<style src="./BtnSecondaryFlat.scss" module lang="scss"></style>
<script src="./BtnSecondaryFlat.js"></script>

<template>
  <router-link
    v-if="to"
    :class="[$style.btnSecondaryFlat]"
    :to="to"
  >
    <slot />
  </router-link>
  <button
    v-else
    :type="type"
    :class="[$style.btnSecondaryFlat]"
  >
    <slot />
  </button>
</template>
