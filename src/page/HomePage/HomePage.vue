<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div
    :class="[$style.homePage]"
  >
    <section>
      <Hero
        :cta="{to:'/', label:'Lees meer'}"
        title="Het coronavirus is niet weg, de curve helemaal platslaan is een illusie."
        image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        spotlight
        author="Jantien Maassen"
        subject="Covid-19"
        date="Vrijdag 22 mei"
      >
        Bereid de IC-capaciteit structureel uit en wijs per regio een ziekenhuis aan "die covid doet", zegt Ernst Kuipers, verantwoordelijk voor de verdeling van corona-zorg in Nederland.
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
