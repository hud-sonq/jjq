<template>
  <div id="navbar">
    <div class="navbar-sections">
      <div class="name-section">Jamie Quatro</div>
      <div class="links-section">
        <img src="/icons/CarbonMenu.svg">
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

#navbar {
  position: fixed;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.name-section {
  padding: 16px;
}

.links-section {
  padding: 16px;
  cursor: pointer;
}


/* we need media queries to make more padding on desktop like 64 or 128px */

</style>