<template>
  <NavBar class="nav" :class="{active: siteEntered}" ref="nav" @nameClicked="refreshIfAtTsd()"/>
  <div id="page">
    <NuxtPage/>
  </div>
  <!-- <FooterComponent /> -->
</template>

<script setup lang=ts>
let nav = ref<HTMLElement | null>(null);
let siteEntered = ref(false);
let router = useRouter();

onMounted(() => {
  router.afterEach((to, from) => {
    setTimeout(() => {
      siteEntered.value = to.path !== '/jjq/';
    }, 500);
  });
  if(window.location.pathname !== '/jjq/') {
    siteEntered.value = true;
  }
});

function refreshIfAtTsd() {
  if (window.location.pathname === '/tsd') {
    console.log('refreshing');
    window.location.reload();
  }
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
