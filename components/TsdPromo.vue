<template>
  <div class="tsd-wrapper" ref="tsdWrapper">
    <div class="tsd-split">
      <div class="tsd-cover" ref="tsdCover">
        <img class="cover-3d" src="/img/tsd/book.png">
      </div>
      <div id="buttonsBetween" ref="buttonsBetween">
        <p style="border-bottom: 1px solid red;">PRE-ORDER NOW:</p>
        <PurchaseButtons />
      </div>
      <div class="tsd-content" ref="tsdContent">
        <div class="description-wrapper">
          <div class="" style="">
            <p style="font-weight: bold; font-size: 1.1rem;">From a New York Times Notable "writer of great originality" comes a bold novel about love, faith and two societal outsiders whose lives converge in the contemporary American South. </p>
            <p style="font-size: 1.1rem;">It's 2014 in Lookout Mountain, Alabama, where the Prophet—a 70-year-old man who paints his visions—lives off the grid in a cabin near the Georgia border. While scrounging for materials at the local dump, the Prophet sees a car pull up to an abandoned gas station. In the back seat is a teenage girl with zip ties on her wrists, a girl he realizes he must rescue from her current life. Her name is Michael and the Prophet feels certain that she is his Big Fish, a messenger sent by God to take his end-time warnings to the White House. Michael finds herself in the Prophet’s remote, art-filled cabin, and as their uncertain dynamic evolves into tender friendship, she is offered a surprising opportunity to escape her past—and perhaps change her future.</p>          </div>
        </div>
      </div>
    </div>
    <div id="buttonsBelow" ref="buttonsBelow">
      <p style="border-bottom: 1px solid red;">PRE-ORDER NOW:</p>
      <PurchaseButtons />
    </div>
    <div id="staticBlurbs">
      <BlurbStatic />
    </div>
  </div>
</template>
  
<script lang="ts" setup>
</script>
  
<style scoped>

.tsd-split {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tsd-cover {
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.fade-in {
  opacity: 1;
}

.description-wrapper {
  width: 365px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


#buttonsBetween {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#buttonsBelow {
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 16px;
}

#staticBlurbs {
  width: 100%;
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
@media (min-width: 800px) {
  .tsd-split {
    flex-direction: row;
    gap: 64px;
  }
  #buttonsBetween {
    display: none;
  }
  #buttonsBelow {
    display: flex;
  }
}
</style>