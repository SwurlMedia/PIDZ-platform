<style src="./ArticlePage.scss" module lang="scss"></style>
<script src="./ArticlePage.js"></script>

<template>
  <div
    :class="[$style.articlePage]"
  >
    <Hero
      title="Het coronavirus is niet weg, de curve helemaal platslaan is een illusie."
      image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
      author="Jantien Maassen"
      subject="Covid-19"
      date="Vrijdag 22 mei"
    />
    <InfoBar
      image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      name="Jantien Maassen"
      profession="RIVM"
      location="Nijmegen"
    />
  </div>
</template>
