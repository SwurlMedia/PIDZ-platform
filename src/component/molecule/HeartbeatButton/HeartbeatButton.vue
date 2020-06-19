<style src="./HeartbeatButton.scss" module lang="scss"></style>
<script src="./HeartbeatButton.js"></script>

<template>
  <div :class="[$style.heartbeatButton]">
    <main @click="incrementLike">
      <Icon
        :class="[$style.Icon]"
        name="heartbeat-light"
      />
    </main>
    <aside>
      <h5> {{ counter }} </h5>
    </aside>
  </div>
</template>
