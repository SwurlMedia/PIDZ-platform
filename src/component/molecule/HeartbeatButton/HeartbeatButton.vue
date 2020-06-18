<style src="./HeartbeatButton.scss" module lang="scss"></style>
<script src="./HeartbeatButton.js"></script>

<template>
  <div :class="[$style.heartbeatButton]">
    <main>
      <Icon
        :class="[$style.Icon]"
        name="heartbeat-light"
      />
    </main>
    <aside>
      <h6>0</h6>
    </aside>
  </div>
</template>
