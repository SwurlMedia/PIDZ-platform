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
    <ul :class="[$style.tagList]">
      <li
        v-for="(tag, index) in tags"
        :key="`misc-block-tag-list-${tag}-${index}`"
        ref="tags"
        :class="[
          {
            [$style.active]: activeTags.includes(index)
          }
        ]"
        @click="toggleTag(index)"
      >
        {{ tag }}
      </li>
    </ul>
    <BtnLightFlat :class="$style.btn">Plaats een artikel</BtnLightFlat>
  </aside>
</template>
