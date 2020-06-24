<style src="./InfoBar.scss" module lang="scss"></style>
<script src="./InfoBar.js"></script>

<template>
  <div
    :class="[$style.infoBar]"
    class="grid-container"
  >
    <div :class="$style.wrapper">
      <AvatarInfo
        :image="image"
        :name="name"
        :profession="profession"
        :location="location"
      />
      <HeartbeatButton />
      <div :class="$style.wrapper">
        <CategoryTag :class="$style.tag" title="COVID-19" />
        <CategoryTag :class="$style.tag" title="Pandemie" />
        <CategoryTag :class="$style.tag" title="Vaccin" />
      </div>
    </div>
  </div>
</template>
