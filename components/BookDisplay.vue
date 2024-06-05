<template>
  <div id="bookDisplay">
    <div class="book-and-other-split">
      <div class="book-container">
        <div class="book-cover">
          <img class="book-image-itself" :src="props.image">
        </div>
      </div>
      <div class="other-container">
        <p style="font-weight: bold; font-size: 1.2rem">A 2018 Book of the Year for the Economist, San Francisco Chronicle, LitHub, Bloomberg, and Times Literary Supplement.</p>
        <p style="font-size: 1.2rem">Married twenty years to Thomas and living in Nashville with their two children, Maggie is drawn ineluctably into a passionate affair while still fiercely committed to her husband and family. What begins as a platonic intellectual and spiritual exchange between writer Maggie and poet James, gradually transforms into an emotional and erotically-charged bond that challenges Maggie’s sense of loyalty and morality, drawing her deeper into the darkness of desire.</p>
        <p style="font-size: 1.2rem">Using an array of narrative techniques and written in spare, elegant prose, Jamie Quatro gives us a compelling account of one woman’s emotional, psychological, physical, and spiritual yearnings—unveiling the impulses and contradictions that reside in us all. Fire Sermon is an unflinchingly honest and formally daring debut novel from a writer of enormous talent.</p>
      </div>
    </div>
    <div class="buy-container">
      <span style="border-bottom: 1px solid red;">Purchase below:</span>
      <p>TODO</p>
    </div>
    <div class="static-blurbs">
      <div class="single-blurb" v-for="{quote, speaker, title} in blurbs">
          <p>
            <span v-html="quote"></span>
            <span style="font-weight: bold;">— {{ speaker }}</span>
            <span style="font-style: italic; font-weight: bold;">{{ title }}</span>
          </p>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fsBlurbs, symBlurbs } from '~/public/constants/blurbs.js'

const props = defineProps<{
  book: string;
  image: string;
  showButtons: boolean;
}>()

let blurbs: any;
switch (props.book) {
  case 'fs':
    blurbs = fsBlurbs;
    break;
  case 'sym':
    blurbs = symBlurbs;
    break;
  default:
    blurbs = fsBlurbs;
}
</script>

<style scoped>

#bookDisplay {
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
}

.book-and-other-split {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 64px; */
}

.book-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-image-itself {
  max-height: 500px;
}

.other-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 850px;
}

.buy-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.static-blurbs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 800px) {
  .book-and-other-split {
    flex-direction: row;
    gap: 64px;
  }
  .static-blurbs {
    width: 60%;
    font-size: 20px;
  }
  .other-container {
    width: 40%;
  }
}

</style>