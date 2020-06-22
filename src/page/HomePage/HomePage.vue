<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
  <div :class="[$style.homePage]">
    <Hero
      :cta="{to:'/', label:'Lees meer'}"
      :title="data.spotlight.title"
      :image="data.spotlight.image"
      spotlight
      :author="data.spotlight.author"
      :subject="data.spotlight.subject"
      :date="data.spotlight.date"
    >
      {{ data.spotlight.description }}
    </Hero>
    <RecommendationCarousel :items="data.recommendations" />
    <div
      :class="$style.overviewContainer"
      class="grid-container"
    >
      <RecentArticlesOverview
        :class="$style.recentArticles"
        :items="data.recents"
      />
      <div :class="$style.misc">
        <MiscBlock />
      </div>
    </div>
  </div>
</template>
