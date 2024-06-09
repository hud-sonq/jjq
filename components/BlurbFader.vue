<template>
    <div id="blurbContainer">
        <div class="quote">
            <div>
                <transition name="fade" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                    <p :key="currentIdx" class="fade-text quote-text-class" v-html="blurb.quote"></p>
                </transition>
            </div>
        </div>
        <div class="speaker">
            <div>
                <transition name="fade" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                    <p :key="currentIdx" class="fade-text speaker-text-class">— {{ blurb.speaker }}</p>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { shortenedTsdBlurbs } from '~/public/constants.js';

const blurb = ref(shortenedTsdBlurbs[0]);
let currentIdx = Math.floor(Math.random() * shortenedTsdBlurbs.length);

let intervalId: NodeJS.Timeout;

const emit = defineEmits(['wink']);

const beforeEnter = (el: Element) => {
    (el as HTMLElement).style.opacity = '0';
};

const enter = (el: Element, done: () => void) => {
    setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 1s';
        (el as HTMLElement).style.opacity = '1';
        done();
        emit('wink');
    }, 100);
};

const leave = (el: Element, done: () => void) => {
    (el as HTMLElement).style.transition = 'opacity 1s';
    (el as HTMLElement).style.opacity = '0';
    setTimeout(done, 1000);
};

const nextQuote = () => {
    currentIdx = (currentIdx + 1) % shortenedTsdBlurbs.length;
    blurb.value = shortenedTsdBlurbs[currentIdx];
};

onMounted(() => {
    intervalId = setInterval(nextQuote, 6000);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>

<style scoped>
#blurbContainer {
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.quote {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.quote-text-class {
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
}

.speaker-text-class {
    font-size: 1.4rem;
    text-align: center;
    font-style: italic;
    margin: 0;
}
</style>