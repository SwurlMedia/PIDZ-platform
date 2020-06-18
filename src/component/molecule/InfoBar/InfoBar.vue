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
    </div>
  </div>
</template>
