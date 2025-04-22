<template>
    <div id="blurbContainer">
        <p style="font-size: 24px; font-weight: bold; text-align: center;">PRAISE FOR <span style="font-size: 24px; font-weight: bold; font-style: italic;">TWO-STEP DEVIL</span>, A NEW YORK TIMES EDITOR’S CHOICE AND WINNER OF THE WILLIE MORRIS AWARD FOR SOUTHERN WRITING</p>
        <div class="single-blurb" v-for="{ quote, speaker, title } in fullTsdBlurbs" :key="quote">
            <p style="text-align: left;">
                <span v-html="quote"></span>
                <!-- <span style=" text-align: left; font-weight: bold;">
                    — {{ speaker }}, author of
                </span>
                <span style="font-style: italic; text-align: left; font-weight: bold;">
                    {{ title }}
                </span> -->
                <span v-if="title" style=" text-align: left; font-weight: bold;">— {{ speaker }}, author of </span>
                <span v-if="title" style="font-style: italic; text-align: left; font-weight: bold;">{{ title }}</span>
                <span v-if="!title" style="font-style: italic; text-align: left; font-weight: bold;">— {{ speaker }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { fullTsdBlurbs } from '~/assets/constants.js';

</script>

<style scoped>
#blurbContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 64px;
}

.single-blurb {
   align-self: flex-start;;
}

@media (min-width: 768px) {
    #blurbContainer {
        width: 60%;
    }
    p {
        font-size: 20px;
    }
}
</style>
