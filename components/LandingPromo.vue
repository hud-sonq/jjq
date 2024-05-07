<template>
  <div id="parent">
    <div class="landing-wrapper">
      <div class="goat-blurb-split">
        <div class="goat-wrapper" ref="goat">
          <img src="/img/tsd/wink_square.gif" class="gif" ref="goatGif">
          <img src="/img/tsd/goat_square.png" class="pic" ref="goatPic">
        </div>
        <div class="blurb-wrapper" ref="blurb">
          <BlurbFader />
        </div>
        <div class="mobile-button-wrapper" ref="mobileButton" id="mobileButton">
          <NuxtLink to="/tsd">
            <div class="enter-site-button">
              <p class="linka">ENTER SITE</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="pc-button-wrapper" ref="pcButton" id="pcButton">
        <NuxtLink to="/tsd" style="text-decoration: none;"><BlobButton /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let goat = ref<HTMLElement | null>(null);
let goatGif = ref<HTMLElement | null>(null);
let goatPic = ref<HTMLElement | null>(null);
let blurb = ref<HTMLElement | null>(null);
let mobileButton = ref<HTMLElement | null>(null);
let pcButton = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    goat.value?.classList.add('fade-in');
  }, 420);
  setTimeout(() => {
    pcButton.value?.classList.add('fade-in');
    blurb.value?.classList.add('fade-in');
  }, 840);
  setTimeout(() => {
    goatPic.value?.classList.add('pic-active');
    goatGif.value?.classList.add('gif-disable');
  }, 4000);
});
</script>

<style scoped>
#parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.landing-wrapper {
  position: relative;
  width: 70%;
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.goat-blurb-split {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.goat-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
}

.blurb-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
  pointer-events: none;
  max-width: 500px;
  min-height: 260px;
  min-width: 216px;
}

.mobile-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 32px;
}

.pc-button-wrapper {
  display: none;
  position: relative;
  top: 0;
  opacity: 0;
  transition: opacity 1s;
}

.goat-wrapper img {
  width: 350px;
  height: 350px;
  object-fit: contain;
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

.enter-site-button {
  padding: 8px 16px;
  border: 1px solid red;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.4s;
  width: fit-content;
  max-width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.enter-site-button:hover {
  background-color: red;
}

.enter-site-button:hover > .linka {
  color: white;
}

@media (min-width: 850px) {
  .goat-blurb-split {
    flex-direction: row;
    gap: 64px;
  }
  .goat-wrapper {
    margin-top: 0px;
  }
  .mobile-button-wrapper {
    display: none;
  }
  .pc-button-wrapper {
    display: flex;
  }
}
</style>