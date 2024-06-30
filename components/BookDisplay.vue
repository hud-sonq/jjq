<template>
  <div id="bookDisplay">
    <div class="book-and-other-split">
      <div class="book-container">
        <div class="book-cover">
          <img class="book-image-itself" :src="props.image">
        </div>
      </div>
      <div class="other-container" v-if="props.book === 'fs'">
        <!-- <p style="font-weight: bold; font-size: 1.2rem">A 2018 Book of the Year for the Economist, San Francisco Chronicle, LitHub, Bloomberg, and Times Literary Supplement.</p> -->
        <p style="font-size: 1.2rem;">"Roiling, raw and sensual on the surface, this mazy novel rewards a second reading . . . The sentences burn with desire and disquiet. The novel is generously condensed, ardently focused, its mechanisms poetic, not expository. In fact, although it is fiction, <span style="font-size: 1.2rem; font-style: italic;">Fire Sermon </span>reminds me most of confessional poetry, the aim of which is uncompromising honesty and self-exposure. You may enter this book through an interest in poetry or theology, but once you are there, it shows you more."</p>
        <p style="font-size: 1.2rem; font-weight: bold;">—New York Times Book Review</p>
      </div>
      <div class="other-container" v-if="props.book === 'sym'">
        <p><span style="font-size: 1.2rem;">“Passionate, sensuous, savagely intense, and remarkable . . . Moves between carnality and spirit like some franker, modernized Flannery O’Connor . . . Quatro has a poet’s compound eye . . . [and] fearless lyricism . . . Expansive, joyful, with forgiveness supplanting ruination.”</span></p>
        <p style="font-weight: bold; font-size: 1.2rem"><span>—James Wood, <span style="font-style: italic;">The New Yorker</span></span></p>
      </div>
    </div>
    <div class="buy-container">
      <span style="border-bottom: 1px solid red;">Purchase below:</span>
      <PurchaseButtons :purchaseLinks="purchaseLinks" v-if="props.showButtons" />
    </div>
    <div class="static-blurbs">
      <!-- <div class="single-blurb" v-for="{quote, speaker, title} in blurbs"> -->
      <div class="single-blurb" v-for="(blurb, index) in blurbs" :key="index">
          <p style="font-size: 20px;">
            <span v-html="blurb.quote"></span>
            <span style="font-weight: bold;">— {{ blurb.speaker }}</span>
            <span style="font-style: italic; font-weight: bold;">{{ blurb.title }}</span>
          </p>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fsBlurbs, symBlurbs } from '~/public/constants.js';

const props = defineProps<{
  book: string;
  image: string;
  showButtons: boolean;
  purchaseLinks: Array<{name: string, url: string}>;
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

let purchaseLinks = props.purchaseLinks;
switch (props.book) {
  case 'fs':
    purchaseLinks = [
      {name: 'Parnassus', url: 'https://www.parnassusbooks.net/book/9780802128980'},
      {name: 'Bookshop', url: 'https://bookshop.org/p/books/fire-sermon-jamie-quatro/11063969?ean=9780802127044'},
      {name: 'Amazon', url: 'https://www.amazon.com/s?k=9780802127044&i=stripbooks&camp=1789&creative=9325&linkCode=ur2&tag=grovatla-20'},
      {name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/fire-sermon-jamie-quatro/1126743870?ean=9780802128980'}
    ];
    break;
  case 'sym':
    purchaseLinks = [
      {name: 'Parnassus', url: 'https://www.parnassusbooks.net/book/9780802122230'},
      {name: 'Bookshop', url: 'https://bookshop.org/p/books/i-want-to-show-you-more-jamie-quatro/12459872?ean=9780802122230'},
      {name: 'Amazon', url: 'https://www.amazon.com/dp/B009W73XWE/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1'},
      {name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/i-want-to-show-you-more-jamie-quatro/1112319055?ean=9780802122230'}
    ];
    break;
  default:
    purchaseLinks = [
      {name: 'Parnassus', url: 'https://www.parnassusbooks.net/book/9780802128980'},
      {name: 'Bookshop', url: 'https://bookshop.org/p/books/fire-sermon-jamie-quatro/11063969?ean=9780802127044'},
      {name: 'Amazon', url: 'https://www.amazon.com/s?k=9780802127044&i=stripbooks&camp=1789&creative=9325&linkCode=ur2&tag=grovatla-'},
      {name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/fire-sermon-jamie-quatro/1126743870?ean=9780802128980'}
    ];
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
  padding-inline: 4%;
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
  padding-inline: 4%;
}

@media (min-width: 800px) {
  .book-and-other-split {
    flex-direction: row;
    gap: 64px;
  }
  .static-blurbs {
    width: 60%;
    font-size: 20px;
    padding-inline: 0px;
  }
  .other-container {
    width: 40%;
    padding-inline: none;
  }
}
</style>