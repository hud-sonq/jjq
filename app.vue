<template>
  <div id="main" ref="main" class="">
    <NavBar class="nav active" ref="nav" v-if="!showLandingPromo"/>
    <LandingPromo v-if="showLandingPromo" @enterClicked="handleEnterClicked()"/>
    <div v-if="!showLandingPromo" id="page">
      <NuxtPage/>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
const showLandingPromo = ref(true);

const handleEnterClicked = () => {
  showLandingPromo.value = false;
}
</script>

<style>
#main {
  height: 100vh;
  overflow-y: auto;
  background-color: #fae7c6;
}

.nav {
  opacity: 0;
  transition: opacity 1s;
}

.active {
  opacity: 1;
}
</style>
