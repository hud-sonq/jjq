<template>
    <div id="newsContainerRoot">
        <div class="horns-container">
        <img src="~/public/img/horndeco.png" alt="coming-soon" class="horns-itself"/>
        </div>
        <div class="news-list-container">
        <div class="news-item" v-for="(news, index) in allNews" :key="index">
            <p>
            <span v-html="formatTitle(news.title, news.special, news.link, news.isItalic)"></span> <!-- false for non-italic -->
            </p>
        </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { allNews } from '~/public/constants.js';

const formatTitle = (title: string, special: string, link: string, isItalic: boolean): string => {
    const [before, after] = title.split(special);
    const hyperlinkClass = isItalic ? 'hyperlink' : 'hyperlink--non-italic';
    return `${before}<a class="${hyperlinkClass}" href="${link}" target="_blank">${special}</a>${after}`;
}
</script>
  
<style scoped>
p {
margin-bottom: 4px;
margin-top: 4px;
font-size: 1.2rem;
}

#newsContainerRoot {
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    margin-bottom: 350px;
}

.horns-container {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}

.horns-itself {
width: 100%;
max-width: 400px;
height: auto;
}

.news-list-container {
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
margin-bottom: 32px;
}

.news-item {
max-width: 80%;
margin-top: 16px;
padding-left: 8px;
transition: transform 0.2s;
cursor: default;
}

@media(min-width: 850px) {
    .many-events-container {
        width: 100%;
    }
}
</style>
