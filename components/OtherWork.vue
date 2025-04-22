<template>
    <div id="otherWorkContainer">
        <div class="many-works">
            <div class="label"><p>SELECT SHORT FICTION</p></div>
            <div class="work" v-for="(work, index) in shortFiction" :key="index">
                <span>{{ work.title }}</span> <span class="hyperlink" @click="navigate(work.link)">{{ work.publisher }}</span>
            </div>
            <div class="label"><p>SELECT NON-FICTION</p></div>
            <div class="work" v-for="(work, index) in nonFiction" :key="index">
                <span v-html="work.title"></span> <span class="hyperlink" @click="navigate(work.link)">{{ work.publisher }}</span>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { nonFiction, shortFiction } from '~/assets/constants.js';


const navigate = (url: any) => {
  window.open(url, '_blank')
}
</script>

<style scoped>

.label {
    border-bottom: 2px solid #669be5;
}

p {
    font-size: 1.3rem;
    margin-bottom: 2px;
}

span {
    font-size: 1.2rem;
}

#otherWorkContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 64px;
}

.many-works {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.work {
    text-align: center;
}

@media (min-width: 800px) {
    /* em {
        text-decoration: none;
    } */
}
</style>