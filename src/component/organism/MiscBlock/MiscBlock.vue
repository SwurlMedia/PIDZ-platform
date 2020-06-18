<style src="./MiscBlock.scss" module lang="scss"></style>
<script src="./MiscBlock.js"></script>

<template>
  <aside :class="[$style.miscBlock]">
    <TextField
      type="search"
      label="Zoeken"
      placeholder="Zoekterm"
      cta-icon="search"
    />
  </aside>
</template>
