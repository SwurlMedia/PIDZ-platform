<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">
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
    <RecommendationCarousel :items="carouselItems" />
  </div>
</template>
