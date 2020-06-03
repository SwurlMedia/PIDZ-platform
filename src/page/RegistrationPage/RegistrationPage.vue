<style src="./RegistrationPage.scss" module lang="scss"></style>
<script src="./RegistrationPage.js"></script>

<template>
  <div
    :class="[$style.registrationPage]"
  >
    <form>
      <section
        :class="$style.formSection"
        class="grid-container"
      >
        <aside>
          <h5>Basisinformatie</h5>
        </aside>
        <main>
          <div :class="$style.inputWrapper">
            <TextField
              label="Voornaam"
              placeholder="John"
            />
            <TextField
              label="Achternaam"
              placeholder="Doe"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              label="Email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              label="Geboortedatum"
              type="date"
              placeholder="14-02-1986"
            />
          </div>
        </main>
      </section>
      <section
        :class="$style.formSection"
        class="grid-container"
      >
        <aside>
          <h5>Opleiding & Specialisatie</h5>
        </aside>
        <main>
          <div :class="$style.inputWrapper">
            <TextField
              label="Opleidingsniveau"
              placeholder="HBO Bachelor"
            />
            <TextField
              label="Studie/opleiding"
              placeholder="Verpleegkunde"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              label="Specialisatie"
              placeholder="ouderenzorg"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              label="Aantal jaren werkzaam"
              type="number"
              placeholder="10 jaar"
            />
          </div>
        </main>
      </section>
      <section
        :class="$style.formSection"
        class="grid-container"
      >
        <aside>
          <h5>Profiel</h5>
        </aside>
        <main>
          <ProfileImgSelector @upload="handleProfileImgUploaded" />
          <div :class="$style.inputWrapper">
            <TextField
              label="Wachtwoord"
              placeholder="ouderenzorg"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              label="Wachtwoord herhalen"
              type="password"
              placeholder="10 jaar"
            />
          </div>
        </main>
      </section>
      <section class="grid-container">
        <div :class="$style.btnWrapper">
          <BtnLightFlat :class="[$style.btnSecondary, $style.btn]">
            Ik heb al een account
          </BtnLightFlat>
          <BtnPrimaryFlat :class="[$style.btnPrimary, $style.btn]">
            Aanmelden
          </BtnPrimaryFlat>
        </div>
      </section>
    </form>
  </div>
</template>
