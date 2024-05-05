<template>
    <div id="quotesContainer">
        <div style="height: 64px">
            <transition name="fade" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                <p :key="currentIndex" class="fade-text quote-text-class">{{ quotes[currentIndex] }}</p>
            </transition>
        </div>
        <transition name="fade" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <p :key="currentIndex" class="fade-text speaker-text-class">- {{ speakers[currentIndex] }}</p>
        </transition>
    </div>
</template>

<script setup lang="ts">
import {quotes, speakers} from '~/public/constants/blurbs.js'

const currentIndex = ref(0);
let intervalId: NodeJS.Timeout | null = null;

const beforeEnter = (el: Element) => {
    (el as HTMLElement).style.opacity = '0';
};

const enter = (el: Element, done: () => void) => {
    setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 1s';
        (el as HTMLElement).style.opacity = '1';
        done();
    }, 100);
};

const leave = (el: Element, done: () => void) => {
    (el as HTMLElement).style.transition = 'opacity 1s';
    (el as HTMLElement).style.opacity = '0';
    setTimeout(done, 1000);
};

const nextQuote = () => {
    currentIndex.value = (currentIndex.value + 1) % quotes.length;
};

onMounted(() => {
    intervalId = setInterval(nextQuote, 6000);
});

onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
});
</script>

<style>
#quotesContainer {
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.quote-text-class {
    font-size: 1.6rem;
    text-align: center;
}

.speaker-text-class {
    font-size: .8rem;
    text-align: center;
    font-style: italic;
}
</style>
