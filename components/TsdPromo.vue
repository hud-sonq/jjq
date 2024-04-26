<template>
  <div class="tsd-wrapper">
    <div class="tsd-cover">
      <img src="/img/tsd/cover.png">
    </div>
    <div class="tsd-content">
      <p>pre-order now: </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

.tsd-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tsd-cover img {
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative;
  top: 96px;
  max-width: 500px;
  max-height: 500px;
}

.tsd-content {
  position: relative;
  top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  padding: 16px;
}

</style>