<template>
    <div id="blurbContainer">
        <p style="font-size: 24px; font-weight: bold; text-align: center;">PRAISE FOR <span style="font-size: 24px; font-weight: bold; font-style: italic;">TWO-STEP DEVIL</span>, ONE OF LITHUB’S MOST ANTICIPATED BOOKS OF 2024:</p>
        <div class="single-blurb" v-for="item in combined" :key="item.quote">
            <p style="text-align: left;">{{ item.quote }} <span style=" text-align: left; font-weight: bold;">-- {{ item.speaker }}, author of <span style="font-style: italic; text-align: left;">{{ item.title }}</span></span></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {quotes, speakers, titles} from '~/public/constants/fullBlurbs.js'
const combined = computed(() => quotes.map((quote, index) => ({ quote, speaker: speakers[index], title: titles[index] })));
</script>

<style scoped>
#blurbContainer {
    width: 365px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 64px;
}

@media (min-width: 768px) {
    #blurbContainer {
        width: 60%;
    }
}
</style>