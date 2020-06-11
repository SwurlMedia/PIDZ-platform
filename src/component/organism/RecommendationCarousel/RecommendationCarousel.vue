<style src="./RecommendationCarousel.scss" module lang="scss"></style>
<script src="./RecommendationCarousel.js"></script>

<template>
  <section
    :class="[$style.recommendationCarousel]"
  >
    <header class="grid-container">
      <h4>Speciaal voor jou</h4>
    </header>
    <main class="grid-container">
      <div :class="$style.carouselWrapper">
        <ul>
          <li>
            <ArticleThumbnail />
          </li>
          <li>
            <ArticleThumbnail />
          </li>
          <li>
            <ArticleThumbnail />
          </li>
          <li>
            <ArticleThumbnail />
          </li>
          <li>
            <ArticleThumbnail />
          </li>
          <li>
            <ArticleThumbnail />
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>
