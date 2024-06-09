<template>
  <div id="aboutContainer">
    <div class="photo-and-about-container">
      <div class="pic-container">
        <img class="pic-itself" src="/img/portriat_compressed.png" />
      </div>
      <div class="about-text-container">
        <div style="padding-bottom: 10px;">
          <span style="font-size: 1.2rem">Jamie Quatro is the <a class="hyperlink" href="https://www.nytimes.com/2013/03/24/books/review/i-want-to-show-you-more-by-jamie-quatro.html" target="_blank">New York Times Notable</a> author of <a class="hyperlink" href="https://www.newyorker.com/magazine/2013/03/11/broken-vows" target="_blank">I Want to Show You More</a>, a finalist for the Los Angeles Times Art Seidenbaum Award and the National Book Critics Circle’s John Leonard Prize, and <a class="hyperlink" href="https://www.nytimes.com/2018/02/06/books/review/fire-sermon-jamie-quatro.html" target="_blank">Fire Sermon</a>, a Book of the Year for the Economist, <a class="hyperlink" href="https://www.sfgate.com/books/article/Fire-Sermon-by-Jamie-Quatro-12494379.php" target="_blank">San Francisco Chronicle</a>, LitHub, Bloomberg, and the Times Literary Supplement. Quatro’s fiction has appeared in <a class="hyperlink" href="https://www.newyorker.com/magazine/2023/08/07/yogurt-days-fiction-jamie-quatro" target="_blank">The New Yorker</a>, <a class="hyperlink" href="https://www.theparisreview.org/fiction/8040/two-men-mary-jamie-quatro" target="_blank">The Paris Review</a>, <span style="font-style: italic;">Harper's,</span> the <a class="hyperlink" href="https://www.nybooks.com/online/2021/01/30/aubade/" target="_blank">New York Review of Books</a>, <a class="hyperlink" href="https://www.pshares.org/issues/spring-2012/sinkhole" target="_blank">Ploughshares</a>, and elsewhere. She is the recipient of fellowships from MacDowell, Yaddo, and Maison Dora Maar. Quatro holds an MA in English from the College of William and Mary and an MFA in fiction from the Bennington College Writing Seminars. She teaches in the Sewanee School of Letters MFA program, and lives with her family in Chattanooga, Tennessee.</span>
        </div>
        <div>
          <span style="font-size: 1.2rem"><a class="hyperlink" href="https://www.youtube.com/watch?v=vsC4N0hzmf8" target="_blank">Watch: Quatro in conversation with Sara Freeman</a></span>
        </div>
        <div>
          <span style="font-size: 1.2rem"><a class="hyperlink" href="https://www.newyorker.com/books/this-week-in-fiction/jamie-quatro-08-07-23" target="_blank">Read: Interview with Cressida Leyshon in The New Yorker</a></span>
        </div>
        <div>
          <span style="font-size: 1.2rem;"><a class="hyperlink" href="https://s3.amazonaws.com/media.bostonbookfest.org/Dirty%2C+Crazy%2C+Endless+Love.mp3" target="_blank">Listen: Quatro in conversation with Andre Dubus III, Nicholson Baker, and James Wood</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
#aboutContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 88px;
  margin-top: 24px;
}

.hyperlink {
  color: #669be5;
  font-style: italic;
  text-decoration: none;
}

.hyperlink:hover {
  text-decoration: underline;
}

.photo-and-about-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
}


.pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  min-width: 50%;
}

.pic-itself {
  width: 95%;
  height: 100%;
  object-fit: contain;
}

.about-text-container {
  min-width: 50%;
  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  max-height: 100%;
}

@media (min-width: 800px) {

  #aboutContainer {
    height: 100%;
    padding-bottom: 0px;
    margin-top: 0px;
  }

  .photo-and-about-container {
    flex-direction: row;
    max-width: 80%;
    gap: 0px;
  }

  .pic-container {
    width: 400px;
    height: 500px;
  }

  .pic-itself {
    width: 100%;
    height: 100%;
  }

  .about-text-container {
    padding-left: 0;
  }

}

@media (min-width: 1700px) {

  .photo-and-about-container {
    max-width: 50%;
  }

}
</style>