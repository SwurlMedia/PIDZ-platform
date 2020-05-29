<style src="./SignInPage.scss" module lang="scss"></style>
<script src="./SignInPage.js"></script>

<template>
  <div
    :class="[$style.signInPage]"
    class="grid-container"
  >
    <main ref="main">
      <Icon class="stagger" :class="$style.logo" name="wijPidz"/>
      <form @submit.prevent="signIn">
        <TextField class="stagger" v-model="email" label="Email" placeholder="Email"/>
        <TextField class="stagger" v-model="password" label="Wachtwoord" placeholder="Wachtwoord" type="password"/>
        <BtnPrimaryFlat class="stagger">Inloggen</BtnPrimaryFlat>
        <a class="stagger" href="#">Wachtwoord vergeten</a>
        <a class="stagger" href="#">Account aanvragen</a>
      </form>
    </main>
    <aside ref="aside" />
  </div>
</template>
