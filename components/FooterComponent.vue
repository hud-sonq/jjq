<template>
    <div class="footer" ref="footer" :class="{'first-fade': firstLoad}" @animationend="emitEnd">
        <div class="footer-content">
            <div><p>Copyright © 2024 by Jamie Quatro</p></div>
            <div>
                <p style="padding-left: 12px; padding-right: 12px;">|</p>
            </div>
            <div style="display: flex; justify-content: center; align-items: center; height: 16px;">
                <div style="height: 100%;">
                    <a href="https://www.instagram.com/jamiejquatro/" target="_blank">
                        <img src="/icons/ig_logo.svg" style="cursor: pointer; height: 100%;"/>
                    </a>
                </div>
            </div>
            <div>
                <p style="padding-left: 12px; padding-right: 12px;">|</p>
            </div>
            <div>
                <a href="mailto:work@byhudson.dev" style="text-decoration: underline; color: black;"><p>u like this site?</p></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    firstLoad: { type: Boolean, default: false }
});
const emit = defineEmits(['fadeEnd']);
function emitEnd(e) {
    if (e.animationName === 'page-fadein') emit('fadeEnd');
}
</script>

<style scoped>
.footer {
    width: 100%;
    height: 64px;
    background-color: #fae7c6;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
}

.first-fade {
    animation: page-fadein 0.4s ease-in-out;
}

@keyframes page-fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>