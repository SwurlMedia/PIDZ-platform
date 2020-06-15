<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div
    :class="[$style.homePage]"
  >
    <section>
      <Hero
        :cta="{to:'/', label:'Lees meer'}"
        title="Ridiculus Adipiscing Vulputate Mattis"
        image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        spotlight
        author="Kees Bovenkamp"
        subject="Huisarts"
        date="2 Uur Geleden"
      >
        Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </Hero>
    </section>
    <section>
      <h1>XXL Heading</h1>
      <h2>XL Heading</h2>
      <h3>L Heading</h3>
      <h4>M Heading</h4>
      <h5>S Heading</h5>
      <h6>XXS Heading</h6>
      <p>
        Maecenas faucibus mollis interdum. Donec sed odio dui. Sed posuere consectetur est at
        lobortis. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
        nibh, ut fermentum massa justo sit amet risus.
      </p>
    </section>
    <section>
      <BtnPrimaryFlat>Button Primary</BtnPrimaryFlat>
      <BtnSecondaryFlat>Button Secondary</BtnSecondaryFlat>
      <BtnLightFlat>Button Light</BtnLightFlat>
    </section>
    <section>
      <TextField
        label="Label"
        placeholder="Placeholder"
      />
      <TextField
        label="Password"
        placeholder="Placeholder"
        type="password"
      />
      <TextField
        label="Textfield met CTA"
        placeholder="Placeholder"
        cta-copy="Versturen"
      />
    </section>
  </div>
</template>
