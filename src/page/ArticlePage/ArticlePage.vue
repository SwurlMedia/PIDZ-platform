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
    <main class="grid-container">
      <article :class="$style.bodyStyle">
        <h4>Huisartsen mogen preventief bloedverdunners voorschrijven aan patiënten met een verhoogd risico op trombose die besmet of vermoedelijk besmet zijn met het coronavirus.</h4>
        <p>
          Uit onderzoek onder coronapatiënten op Nederlandse ic's bleek dat veel van hen tromboseverschijnselen ontwikkelen, waardoor de kans op overlijden groter wordt. Momenteel krijgen coronapatiënten in het ziekenhuis daarom al bloedverdunners toegediend.<br><br>

          Nu komen ook (vermoedelijke) bedlegerige coronapatiënten die niet in het ziekenhuis liggen voor de behandeling in aanmerking, staat in een nieuwe richtlijn. Het gaat om mensen die trombose hebben gehad of veel trombose in de familie hebben en om kankerpatiënten, bij elkaar opgeteld zo'n 150.000 tot 200.000 mensen per jaar.<br><br>

          De huisarts zal per patiënt beoordelen of het toedienen van de bloedverdunners echt noodzakelijk is, omdat het ook kan leiden tot negatieve bijwerkingen, zoals bloedingen. De bloedverdunners zullen vervolgens worden toegediend via een injectie. Het gaat niet om het type bloedverdunners dat hart- en vaatziektepatiënten krijgen.<br><br>

          Het doel van deze preventieve behandeling is het voorkomen van trombosecomplicaties bij patiënten. Mogelijk leidt de behandeling daardoor ook tot minder ziekenhuisopnames.<br><br>

          Momenteel loopt in Nederland een breed onderzoek naar het verband tussen het coronavirus, trombose en longembolieën. Bij een trombose raakt een bloedvat verstopt door een bloedstolsel. Als dit stolsel losschiet en in de longen belandt, heet dat een longembolie.<br><br>
        </p>
      </article>
      <h5>Bron</h5>
      <a
        href="#"
        target="blank"
      >https://nos.nl/artikel/2335226-energie-investeringen-naar-historisch-dieptepunt-door-coronacrisis.html</a>
    </main>
    <RecommendationCarousel :items="carouselItems" />
  </div>
</template>
