<style src="./AvatarInfo.scss" module lang="scss"></style>
<script src="./AvatarInfo.js"></script>

<template>
  <div :class="[$style.avatarInfo]">
    <main>
      <img
        :src="image"
        alt="ProfilePicture"
      >
    </main>
    <aside>
      <h6>{{ name }}</h6>
      <p>{{ profession }}</p>
      <p>{{ location }}</p>
    </aside>
  </div>
</template>
