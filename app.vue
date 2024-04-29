<template>
  <div id="main" ref="main" class="">
    <NavBar class="nav" ref="nav"/>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

onMounted(() => {
  router.push('/landing');
});
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
