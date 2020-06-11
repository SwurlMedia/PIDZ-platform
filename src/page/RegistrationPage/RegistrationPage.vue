<style src="./RegistrationPage.scss" module lang="scss"></style>
<script src="./RegistrationPage.js"></script>

<template>
  <div
    :class="[$style.registrationPage]"
  >
    <!-- TODO: insert hero -->
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(handleSignUp)">
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
              <ValidationProvider
                v-slot="v"
                name="firstName"
                rules="required"
              >
                <TextField
                  v-model="general.firstName"
                  label="Voornaam"
                  placeholder="John"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-first-name-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
              <ValidationProvider
                v-slot="v"
                name="lastName"
                rules="required"
              >
                <TextField
                  v-model="general.lastName"
                  label="Achternaam"
                  placeholder="Doe"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-last-name-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
            </div>
            <div :class="$style.inputWrapper">
              <ValidationProvider
                v-slot="v"
                name="email"
                rules="email|required"
              >
                <TextField
                  v-model="general.email"
                  label="Email"
                  type="email"
                  placeholder="johndoe@email.com"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-email-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
            </div>
            <div :class="$style.inputWrapper">
              <ValidationProvider
                v-slot="v"
                name="dob"
                rules="required"
              >
                <TextField
                  v-model="general.dateOfBirth"
                  label="Geboortedatum"
                  type="date"
                  placeholder="14-02-1986"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-dob-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
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
              <ValidationProvider
                v-slot="v"
                name="Opleidingsniveau"
                rules="required"
              >
                <TextField
                  v-model="occupation.educationLevel"
                  label="Opleidingsniveau"
                  placeholder="HBO Bachelor"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-edu-lvl-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
              <ValidationProvider
                v-slot="v"
                name="Studie/opleiding"
                rules="required"
              >
                <TextField
                  v-model="occupation.study"
                  label="Studie/opleiding"
                  placeholder="Verpleegkunde"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-study-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
            </div>
            <div :class="$style.inputWrapper">
              <ValidationProvider
                v-slot="v"
                name="Specialisatie"
              >
                <TextField
                  v-model="occupation.speciality"
                  label="Specialisatie"
                  placeholder="Ouderenzorg"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-spec-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
            </div>
            <div :class="$style.inputWrapper">
              <ValidationProvider
                v-slot="v"
                name="Ervaring"
                rules="numeric"
              >
                <TextField
                  v-model="occupation.yearsExperience"
                  label="Aantal jaren werkzaam"
                  type="number"
                  placeholder="10 jaar"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-xp-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
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
              <ValidationProvider
                v-slot="v"
                rules="required"
                vid="confirmation"
              >
                <TextField
                  v-model="security.password"
                  label="Wachtwoord"
                  placeholder="Voer een veilig wachtwoord in"
                  type="password"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-password-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
            </div>
            <div :class="$style.inputWrapper">
              <ValidationProvider
                v-slot="v"
                rules="required|confirmed:confirmation"
              >
                <TextField
                  v-model="security.repeatPassword"
                  label="Wachtwoord herhalen"
                  type="password"
                  placeholder="Herhaal uw wachtwoord"
                />
                <span
                  v-for="(error, index) in v.errors"
                  :key="`error-password-conf-${index}`"
                  :class="$style.error"
                >{{ error }}</span>
              </ValidationProvider>
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
    </ValidationObserver>
  </div>
</template>
