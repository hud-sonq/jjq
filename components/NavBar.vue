<template>
  <div id="navbar">
    <div class="navbar-sections">
      <div class="name-section" @click="refreshHome()"><NuxtLink to="/" style="text-decoration: none; color: black;"><span>Jamie Quatro</span></NuxtLink></div>
      <div class="mobile-stack" @click="dropDown(), $emit('stackClicked')">
        <img src="/icons/CarbonMenu.svg">
      </div>
      <div class="links-all" ref="pcLinks">
        <NuxtLink to="/books" style="text-decoration: none; color: black;"><span>BOOKS</span></NuxtLink>
        <NuxtLink to="/events" style="text-decoration: none; color: black;"><span>EVENTS</span></NuxtLink>
        <NuxtLink to="/about" style="text-decoration: none; color: black;"><span>ABOUT</span></NuxtLink>
        <NuxtLink to="/contact" style="text-decoration: none; color: black;"><span>CONTACT</span></NuxtLink>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
let showLinks = false
let pcLinks = ref<HTMLElement | null>(null)

const route = useRoute()
const router= useRouter()

function refreshHome () {
  if (route.path === '/') {
    location.reload()
  } else {
    router.push('/')
  }
}

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
  background-color: #fae7c6;
  font-size: 1.5rem;
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
  right: 16px;
  top: 16px;
  cursor: pointer;
}

.links-all {
  display: none;
  height: fit-content;
  width: 100%;
  position: absolute;
  top: 64px;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fae7c6;
  padding-bottom: 32px;
  border-bottom: 6px solid red;
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
  .links-all {
    display: flex;
    flex-direction: row;
    width: 100%;
    top: 0;
    justify-content: flex-end;
    right: 32px;
    height: 110%;
    background-color: transparent;
    border-bottom: none;
    padding-bottom: none;
  }
  .mobile-stack {
    display: none;
  }
}

</style>