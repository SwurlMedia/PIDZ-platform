<style src="./BtnLightFlat.scss" module lang="scss"></style>
<script src="./BtnLightFlat.js"></script>

<template>
  <router-link
    v-if="to"
    :class="[$style.btnLightFlat]"
    class="btn"
    :to="to"
  >
    <slot />
  </router-link>
  <button
    v-else
    :type="type"
    :class="[$style.btnLightFlat]"
    class="btn"
  >
    <slot />
  </button>
</template>
