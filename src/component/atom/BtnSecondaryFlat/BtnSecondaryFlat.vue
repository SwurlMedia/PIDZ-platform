<style src="./BtnSecondaryFlat.scss" module lang="scss"></style>
<script src="./BtnSecondaryFlat.js"></script>

<template>
  <router-link
    v-if="to"
    :class="[$style.btnSecondaryFlat]"
    class="btn"
    :to="to"
  >
    <slot />
  </router-link>
  <button
    v-else
    :type="type"
    :class="[$style.btnSecondaryFlat]"
    class="btn"
  >
    <slot />
  </button>
</template>
