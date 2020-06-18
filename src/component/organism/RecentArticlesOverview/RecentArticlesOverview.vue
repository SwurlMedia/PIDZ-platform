<style src="./RecentArticlesOverview.scss" module lang="scss"></style>
<script src="./RecentArticlesOverview.js"></script>

<template>
  <section :class="[$style.recentArticlesOverview]">
    <h4>Recente Artikelen</h4>
    <ul :class="$style.articleList">
      <li
        v-for="item in articles"
        :key="item.id"
        ref="carouselItem"
      >
        <router-link to="/">
          <ArticleThumbnail
            :id="item.id"
            :title="item.title"
            :image="item.image"
            :author="item.author"
            :subject="item.subject"
            :date="item.date"
            :description="item.description"
          />
        </router-link>
      </li>
    </ul>
  </section>
</template>
