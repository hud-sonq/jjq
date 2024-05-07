<template>
  <div id="main" ref="main" class="">
    <NavBar class="nav active" ref="nav" @nameClicked="refreshIfAtTsd()"/>
    <div id="page">
      <NuxtPage/>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang=ts>
let nav = ref<HTMLElement | null>(null);

function refreshIfAtTsd() {
  if (window.location.pathname === '/tsd') {
    window.location.reload();
  }
}

</script>

<style>
#main {
  height: 100vh;
  width: 100vw;
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

.page-enter-active,
.page-leave-active {
  transition: all ease-in-out .4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
