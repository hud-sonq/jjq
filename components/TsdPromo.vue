<template>
  <div class="tsd-wrapper" ref="tsdWrapper">
    <div class="tsd-split">
      <div class="tsd-cover" ref="tsdCover">
        <img class="cover-3d" src="/img/tsd/book.png">
      </div>
      <div class="tsd-content" ref="tsdContent">
        <div><p>Pre-order Now: </p></div>
        <div class="pre-order-links">
          <div class="order-link-button"><a href="https://www.amazon.com/dp/0802163130" target="_blank" class="linka" >Amazon</a></div>
          <div class="order-link-button"><a href="https://www.barnesandnoble.com/w/two-step-devil-jamie-quatro/1144929218" target="_blank" class="linka">Barnes & Noble</a></div>
          <div class="order-link-button"><a href="https://bookshop.org/p/books/two-step-devil/20490963?ean=9780802163134" target="_blank" class="linka">Bookshop</a></div>
          <div class="order-link-button"><a href="https://www.parnassusbooks.net/book/9780802163134" target="_blank" class="linka">Parnassus</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let tsdCover = ref<HTMLElement | null>(null);
let tsdContent = ref<HTMLElement | null>(null);
let tsdWrapper = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    tsdCover.value?.classList.add('fade-in');
  }, 210);
  setTimeout(() => {
    tsdContent.value?.classList.add('fade-in');
  }, 500);
});

function pushDatDownDuzHamBurgWasClicked() {
  tsdWrapper.value?.scrollIntoView({ behavior: 'smooth' });
}

</script>

<style scoped>

.tsd-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.tsd-split {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
}

.tsd-cover {
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
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
  opacity: 0;
  transition: opacity 1s;
}

.fade-in {
  opacity: 1;
}

.pre-order-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.linka {
  text-decoration: none; 
  color: red;
  transition: color 0.2s;
}

.order-link-button {
  padding: 8px 16px;
  border: 1px solid red;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.4s; 
}

.order-link-button:hover {
  background-color: red;
}

.order-link-button:hover > .linka {
  color: white;
}

@media (min-width: 600px) {
  .tsd-split {
    flex-direction: row;
  }
}

</style>