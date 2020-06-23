<style src="./RecommendationCarousel.scss" module lang="scss"></style>
<script src="./RecommendationCarousel.js"></script>

<template>
  <section
    :class="[$style.recommendationCarousel]"
  >
    <header class="grid-container">
      <h4>Speciaal voor jou</h4>
      <button
        :class="[$style.arrowLeft]"
        :disabled="currentSlide <= 1"
        @click="prev"
      >
        <Icon name="arrow-circle-left" />
      </button>
      <button
        :class="[$style.arrowRight]"
        :disabled="currentSlide >= totalSlides"
        @click="next"
      >
        <Icon name="arrow-circle-right" />
      </button>
    </header>
    <main class="grid-container">
      <div
        ref="carouselWrapper"
        :class="$style.carouselWrapper"
      >
        <div ref="wrapper">
          <ul ref="carousel">
            <li
              v-for="item in items"
              :key="item.title + item.date"
              ref="carouselItem"
            >
              <router-link :to="{ name: RouteNames.ARTICLEPAGE }">
                <ArticleThumbnail
                  :id="item.articleId"
                  :title="item.title"
                  :image="item.image"
                  :author="item.author"
                  :subject="item.subject"
                  :date="item.date"
                  :description="item.description"
                  :verified="item.verified"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </section>
</template>
