<template>
  <NavBar class="nav active" @stackClicked="dropNavMenu()" :firstLoad="firstLoad"/>
  <transition name="slide"><MobileNavMenu style="opacity: 1;" v-if="showMobileNavMenu" @linkClicked="dropNavMenu()"/></transition>
  <div id="page" :class="{'non-scroll': showMobileNavMenu, 'first-fade': firstLoad}" @animationend="firstLoad = false">
    <NuxtPage/>
    <div><FooterComponent :firstLoad="firstLoad"/></div>
  </div>
</template>

<script setup lang="ts">
let siteEntered = ref(false);
siteEntered.value = true;
let router = useRouter();
let showMobileNavMenu = ref(false);
const dropNavMenu = () => showMobileNavMenu.value = !showMobileNavMenu.value;
const firstLoad = ref(true);
</script>

<style>
#page {
  width: 100%;
  height: calc(100% - 64px);
  position:absolute;
  top: 64px;
  opacity: 1;
}

.first-fade {
  animation: page-fadein 0.4s ease-in-out;
}

@keyframes page-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
