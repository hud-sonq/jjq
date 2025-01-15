<template>
    <div id="newsContainerRoot">
        <div class="horns-container">
        <img src="~/public/img/horndeco.png" alt="coming-soon" class="horns-itself"/>
        </div>
        <div class="news-list-container">
        <div class="news-item" v-for="(news, index) in allNews" :key="index">
            <p>
                <span v-if="index != 12" v-html="formatTitle(news.title, news.special, news.link, news.isItalic)"></span>
                <span v-else>
                    {{ news.title }}: <span class="hyperlink--non-italic" @click="navigate('https://click.icptrack.com/icp/relay.php?r=30862373&msgid=252176&act=USEC&c=1690312&pid=3614381&destination=https%3A%2F%2Fopen.spotify.com%2Fepisode%2F2gvY0me3koCXp2SlLfzIMV%3Fsi%3D7fa06720ac2a4fb2&cf=14468&v=9d1dca7de9eb8e5daab9e324bd13fed034f1cf2e1be07c4f3c96a3e012d64a14')">Spotify</span> <span> | </span> <span class="hyperlink--non-italic" @click="navigate('https://podcasts.apple.com/us/podcast/94-jamie-quatro-two-step-devil/id1557842312?i=1000669786716')">Apple Podcast</span> 
                </span>
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
const navigate = (url: any) => {
  window.open(url, '_blank')
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
