<template>
  <NavBar class="nav" :class="{active: siteEntered}" ref="nav" @nameClicked="refreshIfAtTsd()" @stackClicked="dropNavMenu()"/>
  <MobileNavMenu v-if="showMobileNavMenu" @linkClicked="dropNavMenu()"/>
  <div id="page">
    <NuxtPage/>
  </div>
</template>

<script setup lang=ts>
let nav = ref<HTMLElement | null>(null);
let siteEntered = ref(false);
let router = useRouter();

let showMobileNavMenu = ref(false);

onMounted(() => {
  router.afterEach((to, from) => {
    setTimeout(() => {
      siteEntered.value = to.path !== '/';
    }, 500);
  });
  if(window.location.pathname !== '/') {
    siteEntered.value = true;
  }
});

function refreshIfAtTsd() {
  if (window.location.pathname === '/tsd') {
    console.log('refreshing');
    window.location.reload();
  }
}

function dropNavMenu() {
  console.log('dropping nav menu')
  showMobileNavMenu.value = !showMobileNavMenu.value;
  console.log('viewable', showMobileNavMenu.value);
}
</script>

<style>
#page {
  width: 100%;
  height: calc(100% - 64px);
  position:absolute;
  top: 64px;
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
</style>
