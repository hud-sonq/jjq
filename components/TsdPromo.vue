<template>
  <div class="tsd-wrapper">
    <div class="tsd-split">
      <div class="tsd-cover" ref="tsdCover">
        <img src="/img/tsd/cover.png">
      </div>
      <div class="tsd-content" ref="tsdContent">
        <p>pre-order now: </p>
        <div class="pre-order-links">
          <a href="https://www.amazon.com/dp/1737784904" target="_blank">amazon</a>
          <a href="https://www.barnesandnoble.com/w/the-silent-dance-joel-ramirez/1140199786" target="_blank">barnes & noble</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let tsdCover = ref<HTMLElement | null>(null);
let tsdContent = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    tsdCover.value?.classList.add('fade-in');
  }, 420);
  setTimeout(() => {
    tsdContent.value?.classList.add('fade-in');
  }, 1000);
});

</script>

<style>

.tsd-wrapper {
  position: relative;
  top: 64px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tsd-split {
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.tsd-cover {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
}

.tsd-cover img {
  width: 100%;
  height: auto;
  object-fit: contain;
  top: 96px;
  max-width: 500px;
  max-height: 500px;
}

.tsd-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  padding: 16px;
  opacity: 0;
  transition: opacity 1s;
}

.fade-in {
  opacity: 1;
}

</style>