<style src="./InfoBar.scss" module lang="scss"></style>
<script src="./InfoBar.js"></script>

<template>
  <div
    :class="[$style.infoBar]"
    class="grid-container"
  >
    <AvatarInfo
      :image="image"
      :name="name"
      :profession="profession"
      :location="location"
    />
    <HeartbeatButton />
  </div>
</template>
