<style src="./SignInPage.scss" module lang="scss"></style>
<script src="./SignInPage.js"></script>

<template>
  <div
    :class="[$style.signInPage]"
    class="grid-container"
  >
    <main>
      <Icon :class="$style.logo" name="wijPidz"/>
      <form>
        <TextField v-model="email" label="Email" placeholder="Email"/>
        <TextField v-model="password" label="Wachtwoord" placeholder="Wachtwoord" type="password"/>
        <BtnPrimaryFlat>Inloggen</BtnPrimaryFlat>
        <a href="#">Wachtwoord vergeten</a>
        <a href="#">Account aanvragen</a>
      </form>
    </main>
    <aside />
  </div>
</template>
