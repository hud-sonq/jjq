<template>
    <div id="eventsContainer">
        <div class="many-events-container">
            <div class="event" v-for="(event, index) in events" :key="index">
                <p>{{ event.date }}</p>
                <p>{{ event.name }}</p>
                <p>{{ event.time }}</p>
                <p class="hyperlink" v-if="event.optionalLink" @click="navigate(event.optionalLink)"> More info here. </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { events } from '~/public/constants.js';

const navigate = (url: any) => {
  window.open(url, '_blank')
}

</script>

<style scoped>

p {
    margin-bottom: 4px;
    margin-top: 4px;
    font-size: 1.2rem
}

.hyperlink {
  color: #669be5;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  width: fit-content;
}

.hyperlink:hover {
    text-decoration: underline;
}

#eventsContainer {
    width: 100%; 
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.many-events-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.event {
    width: 500px;
    margin-top: 16px;
    border-left: 2px solid #669be5;
    padding-left: 16px;
    margin-left: 16px;
}

@media(min-width: 850px) {
    .many-events-container {
        width: 70%;
    }
    .hyperlink {
        text-decoration: none;
    }
}

</style>