<template>
  <div id="navbar">
    <div class="navbar-sections">
      <div class="name-section"><NuxtLink to="/" style="text-decoration: none; color: black;"><span>Jamie Quatro</span></NuxtLink></div>
      <div class="links-mobile" @click="dropDown()">
        <img src="/icons/CarbonMenu.svg">
      </div>
      <div class="links-pc" ref="pcLinks">
        <NuxtLink to="/books" style="text-decoration: none; color: black;"><span>books</span></NuxtLink>
        <NuxtLink to="/recent" style="text-decoration: none; color: black;"><span>recent work</span></NuxtLink>
        <NuxtLink to="/about" style="text-decoration: none; color: black;"><span>about</span></NuxtLink>
        <NuxtLink to="/contact" style="text-decoration: none; color: black;"><span>contact</span></NuxtLink>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
let showLinks = false
let pcLinks = ref<HTMLElement | null>(null)

function dropDown() {
  showLinks = !showLinks
  if (showLinks) {
    pcLinks.value?.classList.add('active')
  } else {
    pcLinks.value?.classList.remove('active')
  }
}


</script>

<style>

#navbar {
  position: absolute;
  background-color: white;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 10;
}

.navbar-sections {
  height: 100%;
  width: 100vw;
  position: absolute;
  display: flex;
}

.name-section {
  height: 100%;
  cursor: pointer;
  position: absolute;
  left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.links-mobile {
  height: 100%;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}

.links-pc {
  display: none;
  height: 100%;
  position: absolute;
  top: 48px;
  right: 16px;
  gap: 32px;
  flex-direction: row;
  align-items: center;
}

.active {
  display: flex;
}

span {
  transition: opacity 0.2s ease-in-out;
}

span:hover {
  opacity: 0.5;
}


/* we need media queries to make more padding on desktop like 64 or 128px */

@media (min-width: 600px) {
  .links-pc {
    display: flex;
    top: 0;
  }
  .links-mobile {
    display: none;
  }
}

</style>