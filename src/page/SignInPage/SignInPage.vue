<style src="./SignInPage.scss" module lang="scss"></style>
<script src="./SignInPage.js"></script>

<template>
  <div
    :class="[$style.signInPage]"
    class="grid-container"
  >
    <main ref="main">
      <Icon
        class="stagger"
        :class="$style.logo"
        name="wijPidz"
      />
      <form @submit.prevent="handleSignIn">
        <TextField
          v-model="email"
          class="stagger"
          label="Email"
          placeholder="Email"
        />
        <TextField
          v-model="password"
          class="stagger"
          label="Wachtwoord"
          placeholder="Wachtwoord"
          type="password"
        />
        <BtnPrimaryFlat class="stagger">
          Inloggen
        </BtnPrimaryFlat>
        <a
          class="stagger"
          href="#"
        >Wachtwoord vergeten</a>
        <router-link
          class="stagger"
          :to="{ name: RouteNames.REGISTRATION }"
        >
          Account aanvragen
        </router-link>
      </form>
    </main>
    <aside ref="aside" />
  </div>
</template>
