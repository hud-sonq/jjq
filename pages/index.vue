<template>
    <LandingPromo @enterClicked="handleEnter" v-if="!showTsd"/>
    <TsdPromo v-if="showTsd"/>
</template>

<script lang="ts" setup>
import TsdPromo from '../components/TsdPromo.vue';
const route = useRoute();

const showTsd = ref<boolean>(false);

function handleEnter() {
    showTsd.value = true;
}


</script>

<style scoped>

</style>