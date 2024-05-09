<template>
  <button class="button-24" role="button">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<style scoped>
.button-24 {
  font-family: vermi;
  background: transparent;
  border: 1px solid red;
  border-radius: 3px;
  box-sizing: border-box;
  color: red;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button-24:hover,
.button-24:active {
  background-color: red;
  background-position: 0 0;
  color: white;
}

.button-24:active {
  opacity: .5;
}

@media(max-width: 800px) {
  .button-24 {
    font-size: 16px;
    padding: 8px 10px;
  }
}
</style>