<style src="./Hero.scss" module lang="scss"></style>
<script src="./Hero.js"></script>

<template>
  <div
    :class="[$style.hero]"
    class="grid-container"
    :style="{backgroundImage: `url('${ image }')`}"
  >
    <main>
      <Icon
        name="wijPidz"
        :class="$style.logo"
      />
      <h2 v-if="spotlight">
        In de Spotlight
      </h2>
      <h1>{{ title }}</h1>
      <ArticleInfo
        :author="author"
        :subject="subject"
        :date="date"
        verified
      />
      <p>
        <slot />
      </p>
      <BtnSecondaryFlat
        v-if="cta.label"
        :to="cta.to"
      >
        {{ cta.label }}
      </BtnSecondaryFlat>
    </main>
  </div>
</template>
