<template>
  <NavBar class="nav active" @stackClicked="dropNavMenu()"/>
  <transition name="slide"><MobileNavMenu style="opacity: 1;" v-if="showMobileNavMenu" @linkClicked="dropNavMenu()"/></transition>
  <div id="page" :class="{'non-scroll': showMobileNavMenu}">
    <NuxtPage/>
    <div><FooterComponent/></div>
  </div>
</template>

<script setup lang="ts">
let siteEntered = ref(false);
siteEntered.value = true;
let router = useRouter();
let showMobileNavMenu = ref(false);
const dropNavMenu = () => showMobileNavMenu.value = !showMobileNavMenu.value;
</script>

<style>
#page {
  width: 100%;
  height: calc(100% - 64px);
  position:absolute;
  top: 64px;
}

#page.non-scroll {
  overflow: hidden;
}

.nav {
  opacity: 0;
  transition: opacity 1s;
}

.nav.active {
  opacity: 1;
}

.page-enter-active,
.page-leave-active {
  transition: all ease-in-out .4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.slide-enter-active, .poo-leave-active {
  transition: all ease-in-out .4s;
}

.slide-enter-from, .poo-leave-to {
  opacity: 0;
  transform: translateY(-100%);
  position: absolute;
  width: 100%;
  z-index: 100;
}
</style>
