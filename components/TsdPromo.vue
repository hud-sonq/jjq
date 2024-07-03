<template>
  <div>
    <div class="tsd-split">
      <div class="tsd-cover">
        <img src="/img/tsd/book_compressed.png">
      </div>
      <div id="buttonsBetween">
        <p style="border-bottom: 1px solid red;">PRE-ORDER NOW:</p>
        <PurchaseButtons v-bind="bookProps" />
      </div>
      <div class="tsd-content">
        <div class="description-wrapper">
          <div class="mobile-padding">
            <p style="font-weight: bold; font-size: 1.2rem;">"Jamie Quatro is a writer of sinuous, muscular power and grace. <span style="font-weight: bold; font-style: italic; font-size: 1.2rem;">Two-Step Devil</span> is a starkly gorgeous story of God and loss and art and love, and her best book yet." — Lauren Groff, author of <span style="font-style: italic;">The Vaster Wilds</span></p>
            <p style="font-size: 1.2rem;">It's 2014 in Lookout Mountain, Alabama, where the Prophet—a 70-year-old man who paints his visions—lives off the grid in a cabin near the Georgia border. While scrounging for materials at the local dump, the Prophet sees a car pull up to an abandoned gas station. In the back seat is a teenage girl with zip ties on her wrists, a girl he realizes he must rescue from her current life.</p>
            <p style="font-size: 1.2rem;">Her name is Michael, and the Prophet feels certain that she is his Big Fish, a messenger sent by God to take his apocalyptic warnings to the White House. Michael finds herself in the Prophet’s remote, art-filled cabin, and as their uncertain dynamic evolves into tender friendship, she is offered a surprising opportunity to escape her past—and perhaps change her future.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="buttonsBelow">
      <p style="border-bottom: 1px solid red;">COMING SEP 10, 2024 - PRE-ORDER NOW:</p>
      <PurchaseButtons v-bind="bookProps"/>
    </div>
    <div id="staticBlurbs" class="mobile-padding">
      <BlurbStatic />
    </div>
  </div>
</template>

<script setup lang="ts">
const bookProps = {
    book: 'tsd',
    image: "/img/tsd/book_compressed.png",
    showButtons: true,
    purchaseLinks: [
        {name: 'Parnassus', url: 'https://www.parnassusbooks.net/book/9780802163134'},
        {name: 'Bookshop', url: 'https://bookshop.org/p/books/two-step-devil/20490963?ean=9780802163134'},
        {name: 'Amazon', url: 'https://www.amazon.com/dp/0802163130'},
        {name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/two-step-devil-jamie-quatro/1144929218'}
    ]
}

</script>
  
<style scoped>
.tsd-split {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tsd-cover {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tsd-cover img {
  max-width: 600px;
  max-height: 500px;
}

.tsd-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: black;
}

.fade-in {
  opacity: 1;
}

.description-wrapper {
  max-width: 850px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


#buttonsBetween {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#buttonsBelow {
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
}

#staticBlurbs {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes slide {
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
}

.mobile-padding {
  padding-inline: 4%;
}
@media (min-width: 800px) {
  .tsd-split {
    flex-direction: row;
    gap: 64px;
  }
  #buttonsBetween {
    display: none;
  }
  #buttonsBelow {
    display: flex;
  }
  .tsd-content {
    width: 40%;
  }
  .mobile-padding {
    padding-left: 0;
  }
}
</style>
