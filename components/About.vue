<template>
  <div id="aboutContainer">
    <div class="photo-and-about-container">
      <div class="pic-container">
        <img class="pic" src="/img/portriat.png" />
      </div>
      <div class="about-text-container">
        <div>
          <p style="font-size: 1.1rem">Jamie Quatro is the New York Times Notable author of I Want to Show You More, a finalist for the Los Angeles Times Art Seidenbaum Award and the National Book Critics Circle’s John Leonard Prize, and Fire Sermon, a Book of the Year for the Economist, San Francisco Chronicle, LitHub, Bloomberg, and the Times Literary Supplement. Quatro’s fiction has appeared in The New Yorker, The Paris Review, the New York Review of Books, Ploughshares, and elsewhere. She is the recipient of fellowships from MacDowell, Yaddo, and Maison Dora Maar. Quatro holds an MA in English from the College of William and Mary and an MFA in fiction from the Bennington College Writing Seminars. She teaches in the Sewanee School of Letters MFA program, and lives with her family in Chattanooga, Tennessee.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
#aboutContainer {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.pic {
  max-height: 80%;
}

.photo-and-about-container {
  display: flex;
  width: 60%;
  padding-left: 64px;
  padding-right: 64px;
  justify-content: space-between
}

.pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}

</style>