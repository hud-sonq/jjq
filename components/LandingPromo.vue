<template>
    <div id="landingPromoPage">
        <div class="landing-wrapper">
            <div class="goat-blurb-split">
                <div class="goat-wrapper" ref="goat">
                    <img src="/img/tsd/wink_square.gif" class="gif" ref="goatGif">
                    <img src="/img/tsd/goat_square.png" class="pic" ref="goatPic">
                </div>
                <div class="blurb-wrapper" ref="blurb">
                    <BlurbFader />
                </div>
            </div>
            <div id="button" class="button" ref="button">
                <NuxtLink to="/tsd" style="text-decoration: none;"><BlobButton text="ENTER SITE"/></NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
let goat = ref<HTMLElement | null>(null);
let goatGif = ref<HTMLElement | null>(null);
let goatPic = ref<HTMLElement | null>(null);
let blurb = ref<HTMLElement | null>(null);
let button = ref<HTMLElement | null>(null);

onMounted(() => {
setTimeout(() => {
    goat.value?.classList.add('fade-in');
}, 420);
setTimeout(() => {
    button.value?.classList.add('fade-in');
    blurb.value?.classList.add('fade-in');
}, 2000);
setTimeout(() => {
    goatPic.value?.classList.add('pic-active');
    goatGif.value?.classList.add('gif-disable');
}, 4000);
});
</script>
  
<style scoped>
#landingPromoPage {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  
    align-items: center;
    bottom: 48px;
}

.landing-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.goat-blurb-split {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.goat-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s;
}

.blurb-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s;
    pointer-events: none;
    max-width: 500px;
    min-height: 260px;
    min-width: 216px;
}

.button {
    opacity: 0;
    transition: opacity 1s;
    padding-top: 16px;
}

.goat-wrapper img {
    width: 350px;
    height: 350px;
    object-fit: contain;
}

.fade-in {
    opacity: 1;
}

.linka {
    text-decoration: none; 
    color: red;
    transition: color 0.2s;
    margin-top: 4px;
    margin-bottom: 2px;
}

.pic {
    display: none;
    opacity: 0;
    transition: opacity 1s;
}

.pic-active {
    display: block;
    opacity: 1;
}

.gif-disable {
    display: none;
}

.enter-site-button:hover {
    background-color: red;
}

.enter-site-button:hover > .linka {
    color: white;
}

@media (min-width: 850px) {
.goat-blurb-split {
    flex-direction: row;
    gap: 64px;
}
.goat-wrapper {
    margin-top: 0px;
}
#landingPromoPage {
    justify-content: center;
    position: static;
    bottom: 0;
}
.button {
    padding-top: 0;
}
}
</style>