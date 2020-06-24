<style src="./ArticlePage.scss" module lang="scss"></style>
<script src="./ArticlePage.js"></script>

<template>
  <div
    :class="[$style.articlePage]"
  >
    <router-link
      :class="[$style.backLink]"
      :to="{ name: RouteNames.HOME }"
    >
      <Icon name="arrow-left-light" />
      Terug naar overzicht
    </router-link>
    <Hero
      title="SER slaat alarm: groot personeelstekort in de zorg dreigt"
      image="https://nos.nl/data/image/2020/01/09/620111/1920x1080a.jpg"
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
        <div :class="$style.articleWrapper">
          <h4>
            Willen we genoeg handen in de zorg hebben, dan moet het kabinet nu ingrijpen. Het belang
            van voldoende zorgpersoneel blijkt des te meer nu we midden in de coronacrisis zitten,
            concludeert de Sociaal Economische Raad (SER) in een rapport over de zorg van de
            toekomst.
          </h4>
          <p>
            Minister De Jonge van Volksgezondheid vroeg de SER twee jaar geleden onderzoek te doen
            naar de stijgende zorgkosten. Als er niks gebeurt, dreigen de zorgkosten de komende
            twintig jaar te verdubbelen. Het rapport zou in de eerste instantie in maart gepresenteerd
            worden, maar toen kwam de corona-uitbraak en werd het uitgesteld. Nu publiceert de SER het
            rapport alsnog en is er een hoofdstuk aan toegevoegd over de impact van het
            coronavirus.
          </p>
          <p>
            "De coronacrisis heeft een vergrootglas gelegd op onze conclusie, namelijk dat we heel
            veel mensen tekort gaan komen", zegt Mariëtte Hamer, voorzitter van de SER. Op dit moment
            werken er zo'n 1,4 miljoen mensen in de zorg. De SER schat in dat er in 2040 meer dan 2
            miljoen mensen nodig zijn. Als er niet snel ingegrepen zal worden, dreigt het ten koste te
            gaan van de kwaliteit van de zorg in Nederland.
          </p>
          <p>
            Minister De Jonge zei vandaag voorafgaand aan de ministerraad er al volop mee bezig te
            zijn. "Al die dingen die we de afgelopen jaren hebben gedaan om te investeren in de zorg,
            om mensen op te leiden, om meer mensen aan de slag te krijgen." Maar hij erkent ook dat
            het niet genoeg is. "Je moet de zorg anders organiseren: meer innovatie en meer regie in
            de regio en van de landelijke overheid."
          </p>
          <h5>Juist nu</h5>
          <p>
            SER-voorzitter Hamer benadrukt dat er vooral gekeken moet worden naar de werkdruk van
            veel mensen in de zorg. "Mensen hebben vaak het gevoel dat ze in een keurslijf van regels
            moeten werken." Volgens de SER-voorzitter is nu het uitgelezen moment om dit te
            verbeteren. "Als we die zorg zo belangrijk vinden laten we dan zorgen dat er meer mensen
            dit werk gaan doen. En dat we de mensen die er werken meer ruimte geven."
          </p>
          <p>
            Veel mensen zullen de komende tijd mogelijk hun baan verliezen en dit zijn potentiële
            kandidaten voor in de zorg. Om die stap te kunnen maken moet het werk volgens Hamer wel
            aantrekkelijker worden gemaakt. Zo moet onder andere de administratieve rompslomp worden
            verminderd en moeten zorgverleners meer tijd krijgen voor hun daadwerkelijke beroep.
          </p>
          <p>
            De uitbraak van het coronavirus heeft ook een aantal veranderingen in de zorg doen
            versnellen. De SER zegt in het rapport veel meer ruimte te zien voor digitalisering van de
            zorg. Juist dit is de afgelopen tijd in een versneld tempo ingevoerd.
          </p>
          <h5>Meer digitalisering</h5>
          <p>
            Artsen in ziekenhuizen geven aan steeds meer te (beeld)bellen met patiënten. Voor de
            corona-uitbraak gebeurde dit een enkele keer. Maar na de uitbraak is dit volledig
            veranderd. Een aantal artsen geeft zelfs aan dat de meerderheid van de consulten nu
            digitaal plaatsvindt.
          </p>
          <p>
            Toch is er nog altijd veel ruimte voor verdere verbetering, zegt de SER. Vooral het
            elektronisch patiëntendossier laat al veel te lang op zich wachten. Vooral bezwaren over
            de privacy zijn de reden dat het nog altijd niet is doorgevoerd. Toch zijn volgens de SER
            veel van deze bezwaren niet langer aan de orde en is het tijd dat de overheid in actie
            komt. "Pak het op en ga het regelen", geeft Hamer het kabinet mee.
          </p>
          <h5>Bron</h5>
          <a
            href="https://nos.nl/artikel/2337769-ser-slaat-alarm-groot-personeelstekort-in-de-zorg-dreigt.html"
            target="_blank"
          >https://nos.nl/artikel/2337769-ser-slaat-alarm-groot-personeelstekort-in-de-zorg-dreigt.html</a>
        </div>
      </article>
    </main>
    <RecommendationCarousel :items="data.recommendations" />
  </div>
</template>
