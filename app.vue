<template>
  <div id="main" ref="main" class="">
    <NavBar class="nav active" ref="nav" v-if="!showLandingPromo"/>
    <div class="landing-wrapper" v-if="showLandingPromo">
      <LandingPromo @enterClicked="enterSite()"/>
    </div>
    <div v-if="!showLandingPromo" id="page">
      <NuxtPage/>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
const showLandingPromo = ref(true);

const enterSite = () => {
  showLandingPromo.value = false;
}
</script>

<style>
#main {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  background-color: #fae7c6;
}

.landing-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  opacity: 0;
  transition: opacity 1s;
}

.active {
  opacity: 1;
}
</style>
