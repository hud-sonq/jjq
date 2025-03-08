<template>
    <div id="eventsContainer">
        <div class="many-events-container">
            <div class="event" v-for="(event, index) in events" :key="index">
                <p>{{ event.date }}</p>
                <p>{{ event.city }}</p>
                <p>{{ event.name }}</p>
                <p class="hyperlink" v-if="event.optionalLink" @click="navigate(event.optionalLink)">More info <span v-if="event.tickets"> + tickets</span> here.</p>
                <p class="tba" v-else>- Details TK</p>
            </div>
        </div>
        <img class="cheeky" src="~/public/img/horndeco.png" alt="cheeky" />
    </div>
</template>

<script setup lang="ts">
import { events } from '~/assets/constants';

const navigate = (url: any) => {
  window.open(url, '_blank')
}

</script>

<style scoped>

.tba {
    font-style: italic;
}
p {
    margin-bottom: 4px;
    margin-top: 4px;
    font-size: 1.2rem;
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
    margin-bottom: 32px;
}

.event {
    width: 300px;
    margin-top: 16px;
    border-left: 2px solid #669be5;
    padding-left: 8px;
    transition: transform 0.2s;
    cursor: default;
}

@media(min-width: 850px) {
    .many-events-container {
        width: 100%;
    }
    .hyperlink {
        text-decoration: none;
    }
}
</style>