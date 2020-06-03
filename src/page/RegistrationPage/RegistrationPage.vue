<style src="./RegistrationPage.scss" module lang="scss"></style>
<script src="./RegistrationPage.js"></script>

<template>
  <div
    :class="[$style.registrationPage]"
  >
    <!-- TODO: insert hero -->
    <form @submit.prevent="handleSignUp">
      <section
        :class="$style.formSection"
        class="grid-container"
      >
        <aside>
          <h5>Basisinformatie</h5>
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </p>
        </aside>
        <main>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="general.firstName"
              label="Voornaam"
              placeholder="John"
            />
            <TextField
              v-model="general.lastName"
              label="Achternaam"
              placeholder="Doe"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="general.email"
              label="Email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="general.dateOfBirth"
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
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
            pharetra augue.
          </p>
        </aside>
        <main>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="occupation.educationLevel"
              label="Opleidingsniveau"
              placeholder="HBO Bachelor"
            />
            <TextField
              v-model="occupation.study"
              label="Studie/opleiding"
              placeholder="Verpleegkunde"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="occupation.speciality"
              label="Specialisatie"
              placeholder="ouderenzorg"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="occupation.yearsExperience"
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
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </aside>
        <main>
          <ProfileImgSelector @upload="handleProfileImgUploaded" />
          <div :class="$style.inputWrapper">
            <TextField
              v-model="security.password"
              label="Wachtwoord"
              placeholder="Voer een veilig wachtwoord in"
              type="password"
            />
          </div>
          <div :class="$style.inputWrapper">
            <TextField
              v-model="security.repeatPassword"
              label="Wachtwoord herhalen"
              type="password"
              placeholder="Herhaal uw wachtwoord"
            />
          </div>
        </main>
      </section>
      <section class="grid-container">
        <div :class="$style.btnWrapper">
          <BtnLightFlat
            :class="[$style.btnSecondary, $style.btn]"
            :to="{name: RouteNames.SIGN_IN}"
          >
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
