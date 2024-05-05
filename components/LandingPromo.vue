<template>
  <div class="tsd-wrapper">
    <div class="tsd-split">
      <div class="tsd-cover" ref="tsdCover">
        <img src="/img/tsd/winkf.gif" class="gif" ref="tsdGif">
        <img src="/img/tsd/goat.png" class="pic" ref="tsdPic">
      </div>
      <div class="tsd-content" ref="tsdContent">
        <div class="enter-site-blurb-and-button-wrapper">
          <div ref="blurbz" class="blurbz"><BlurbFader /></div>
          <div class="enter-site-button" @click="$emit('enterClicked')"><p class="linka">ENTER SITE</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

let tsdCover = ref<HTMLElement | null>(null);
let tsdContent = ref<HTMLElement | null>(null);
let tsdGif = ref<HTMLElement | null>(null);
let tsdPic = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    tsdCover.value?.classList.add('fade-in');
  }, 420);
  setTimeout(() => {
    tsdContent.value?.classList.add('fade-in');
  }, 1600);
  setTimeout(() => {
    tsdPic.value?.classList.add('pic-active');
    tsdGif.value?.classList.add('gif-disable');
  }, 4000);
});
</script>

<style scoped>
.tsd-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.tsd-split {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
}

.tsd-cover {
  margin-top: 256px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 128px;
  opacity: 0;
  transition: opacity 1s;
}

.fade-in {
  opacity: 1;
}

.linka {
  text-decoration: none; 
  color: red;
  transition: color 0.2s;
  margin-top: 4px;
  margin-bottom: 2px;
}

.enter-site-blurb-and-button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 128px;
}

.enter-site-button {
  padding: 8px 16px;
  border: 1px solid red;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.4s;
  width: fit-content;
  max-width: 128px;
}

.enter-site-button:hover {
  background-color: red;
}

.enter-site-button:hover > .linka {
  color: white;
}

.pic {
  display: none;
  opacity: 0;
  transition: opacity 1s;
}

.pic-active {
  display: block;
  opacity: 1;
}

.gif-disable {
  display: none;
}

@media (min-width: 600px) {
  .tsd-split {
    flex-direction: row;
    gap: 64px;
  }
  .tsd-cover {
    margin-top: 0px;
  }
  .tsd-content {
    width: 25%;
    bottom: 0px;
  }
  .enter-site-blurb-and-button-wrapper {
    margin-bottom: 0px;
  }
}
</style>