<template>
  <div id="navbar" v-if="!showLinks">
    <div class="navbar-sections">
      <div class="name-section"><NuxtLink to="/tsd" style="text-decoration: none; color: black;" @click="$emit('nameClicked')"><span>JAMIE QUATRO</span></NuxtLink></div>
      <div class="mobile-stack" @click="dropDown(), $emit('stackClicked')">
        <img src="/icons/CarbonMenu.svg">
      </div>
      <div class="links-all" ref="links">
        <div class="links-all-spacing">
          <NuxtLink to="/books" style="text-decoration: none; color: black;"><span>BOOKS</span></NuxtLink>
          <NuxtLink to="/events" style="text-decoration: none; color: black;"><span>EVENTS</span></NuxtLink>
          <NuxtLink to="/about" style="text-decoration: none; color: black;"><span>ABOUT</span></NuxtLink>
          <NuxtLink to="/contact" style="text-decoration: none; color: black;"><span>CONTACT</span></NuxtLink>
        </div>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
let showLinks = false
let links = ref<HTMLElement | null>(null)

function dropDown() {
  showLinks = !showLinks
  if (showLinks) {
    links.value?.classList.add('active')
  } else {
    links.value?.classList.remove('active')
  }
}
</script>

<style scoped>
#navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 10;
  background-color: #fae7c6;
  font-size: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.navbar-sections {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name-section {
  height: 100%;
  cursor: pointer;
  position: absolute;
  left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
}

.mobile-stack {
  height: 100%;
  position: absolute;
  right: 32px;
  top: 16px;
  cursor: pointer;
}

.links-all {
  position: absolute;
  display: none;
  opacity: 0;
  transition: opacity 1s;
  flex-direction: column;
  top: 64px;
  right: 0;
}

.links-all-spacing {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  gap: 32px; 
  right: 32px;
}

.active {
  display: flex;
  opacity: 1;
}

span {
  transition: opacity 0.2s ease-in-out;
}

span:hover {
  opacity: 0.5;
}

@media (min-width: 600px) {
  .links-all {
    opacity: 1;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    gap: 32px;
    top: 0;
    right: 32px;
    justify-content: flex-end;
    background-color: transparent;
    border-bottom: none;
    padding-bottom: none;
  }
  .links-all-spacing {
    flex-direction: row;
  }
  .mobile-stack {
    display: none;
  }
}
</style>