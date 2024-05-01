<template>
    <div class="tsd-wrapper" ref="tsdWrapper">
      <div class="tsd-split">
        <div class="tsd-cover" ref="tsdCover">
          <img class="cover-3d" src="/img/tsd/book.png">
        </div>
        <div class="tsd-content" ref="tsdContent">
          <div class="blurb-top-wrapper">
            <BlurbTimeout />
          </div>
        </div>
      </div>
      <div class="tsd-paragraphs">
        <p style="font-weight: bold;">From a New York Times Notable "writer of great originality" comes a bold novel about love, faith and two societal outsiders whose lives converge in the contemporary American South. </p>
        <p>It's 2014 in Lookout Mountain, Alabama, where the Prophet—a 70-year-old man who paints his visions—lives off the grid in a cabin near the Georgia border. While scrounging for materials at the local dump, the Prophet sees a car pull up to an abandoned gas station. In the back seat is a teenage girl with zip ties on her wrists, a girl he realizes he must rescue from her current life. Her name is Michael and the Prophet feels certain that she is his Big Fish, a messenger sent by God to take his end-time warnings to the White House. Michael finds herself in the Prophet’s remote, art-filled cabin, and as their uncertain dynamic evolves into tender friendship, she is offered a surprising opportunity to escape her past—and perhaps change her future.</p>
        <p>Moving through the worlds of the Prophet, the girl, and a beguiling devil figure who dances in the corner of their lives, Two-Step Devil is a propulsive, philosophical examination of fate and faith that dares to ask what salvation, if any, can be found in our modern world.</p>
        <p style="font-size: 1.4rem; font-weight: bold; font-style: italic;">PRAISE FOR TWO-STEP DEVIL, ONE OF LITHUB’S MOST ANTICIPATED BOOKS OF 2024:</p>
        <!-- <p>"Jamie Quatro is a writer of sinuous, muscular power and grace. Two-Step Devil is a starkly gorgeous story of God and loss and art and love, and her best book yet." <span style="font-weight: bold;">-- Lauren Groff, author of The Vaster Wilds</span></p> -->
      </div>
      <div class="blurb-wrapper-1">
        <div class="blurb-wrapper-2">
          <BlurbTimeout />
          <img class="drag-indicator" src="/icons/drag.svg">
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  let tsdWrapper = ref<HTMLElement | null>(null);
  let tsdCover = ref<HTMLElement | null>(null);
  let tsdContent = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    setTimeout(() => {
      tsdWrapper.value?.classList.add('fade-in');
    }, 100);
    setTimeout(() => {
      tsdCover.value?.classList.add('fade-in');
    }, 250);
    setTimeout(() => {
      tsdContent.value?.classList.add('fade-in');
    }, 1000);
  });
  
  function pushDatDownDuzHamBurgWasClicked() {
    tsdWrapper.value?.scrollIntoView({ behavior: 'smooth' });
  }
  </script>
  
  <style scoped>
  .tsd-wrapper {
    position: relative;
    top: 64px;
    width: 100%;
    height: 100%;
    padding-bottom: 256px;
    opacity: 0;
    transition: opacity 1s;
  }
  
  .tsd-split {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;
  }
  
  .tsd-cover {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s;
  }
  
  .tsd-cover img {
    max-width: 600px;
    max-height: 500px;
  }
  
  .tsd-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: black;
    opacity: 0;
    transition: opacity 1s;
    margin-top: 64px;
  }
  
  .fade-in {
    opacity: 1;
  }
  
  .pre-order-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  
  .blurb-top-wrapper {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  
  .linka {
    text-decoration: none; 
    color: red;
    transition: color 0.2s;
  }
  
  .order-link-button {
    padding: 8px 16px;
    border: 1px solid red;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.4s; 
  }
  
  .order-link-button:hover {
    background-color: red;
  }
  
  .order-link-button:hover > .linka {
    color: white;
  }
  
  .tsd-paragraphs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: black;
    margin-top: 64px;
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .blurb-wrapper-1 {
    width: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
  }
  
  .blurb-wrapper-2 {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  @keyframes slide {
    0% { transform: translateX(0); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }
  
  .drag-indicator {
    animation: slide 1s infinite;
    position: relative;
    bottom: 8px;
  }
  @media (min-width: 600px) {
    .tsd-split {
      flex-direction: row;
    }
    .tsd-paragraphs {
      padding-left: 256px;
      padding-right: 256px;
    }
    .blurb-wrapper-2 {
      width: 50%;
    }
    .drag-indicator {
      bottom: 48px;
    }
  }
  </style>