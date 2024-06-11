<template>
  <div id="navbar">
    <div class="navbar-sections">
      <NuxtLink to="/tsd" class="name-link" @click="$emit('nameClicked')"><div><span>JAMIE QUATRO</span></div></NuxtLink>
      <div class="mobile-stack" @click="$emit('stackClicked')">
        <img src="/icons/CarbonMenu.svg">
      </div>
      <div class="links-all" ref="links">
        <div class="links-all-spacing">
          <NuxtLink to="/books" style="text-decoration: none; color: black; font-size: 20px;"><span>BOOKS</span></NuxtLink>
          <NuxtLink to="/events" style="text-decoration: none; color: black; font-size: 20px;"><span>EVENTS</span></NuxtLink>
          <NuxtLink to="/about" style="text-decoration: none; color: black; font-size: 20px;"><span>ABOUT</span></NuxtLink>
          <NuxtLink to="/contact" style="text-decoration: none; color: black; font-size: 20px;"><span>CONTACT</span></NuxtLink>
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#navbar {
  position: fixed;
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

.name-link {
  /* letter-spacing: 5px; */
  font-size: 22px;
  height: 100%;
  cursor: pointer;
  position: absolute;
  left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
  text-decoration: none;
  color: black;
}

.links-all {
  position: absolute;
  transition: opacity 1s;
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
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center; 
  gap: 32px; 
  right: 32px;
}

.mobile-stack {
  height: 100%;
  position: absolute;
  right: 32px;
  top: 16px;
  cursor: pointer;
  display: none;
}

.active {
  display: flex;
  opacity: 1;
}

span {
  transition: opacity 0.2s ease-in-out;
}

.name-link:hover  span {
  opacity: 0.5;
}

span:hover {
  opacity: 0.5;
}

@media (max-width: 600px) {
  .links-all {
    display: none;
  }
  .mobile-stack {
    display: block;
  }
}
</style>