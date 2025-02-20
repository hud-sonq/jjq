<template>
  <div id="aboutContainer">
    <div class="photo-and-about-container">
      <div class="pic-container">
        <img class="pic-itself" src="/img/portriat_compressed.png" />
      </div>
      <div class="about-text-container">
        <div style="padding-bottom: 10px;">
          <span style="font-size: 1.2rem;">
            Jamie Quatro is the 
            <a class="hyperlink" href="https://www.nytimes.com/2013/03/24/books/review/i-want-to-show-you-more-by-jamie-quatro.html" target="_blank">New York Times Notable</a> 
            author of 
            <a class="hyperlink" href="https://www.newyorker.com/magazine/2013/03/11/broken-vows" target="_blank">I Want to Show You More</a>,
            a finalist for the 
            <span style="font-size: 1.2rem; font-style: italic;" >Los Angeles Times</span> 
            Art Seidenbaum Award and the National Book Critics Circle’s John Leonard Prize, and 
            <a class="hyperlink" href="https://www.nytimes.com/2018/02/06/books/review/fire-sermon-jamie-quatro.html" target="_blank">Fire Sermon</a>, 
            a Book of the Year for the 
            <span style="font-size: 1.2rem; font-style: italic;">Economist</span>, 
            <a class="hyperlink" href="https://www.sfgate.com/books/article/Fire-Sermon-by-Jamie-Quatro-12494379.php" target="_blank">San Francisco Chronicle</a>, 
            <span style="font-size: 1.2rem; font-style: italic;">LitHub</span>, 
            <span style="font-size: 1.2rem; font-style: italic;">Bloomberg</span>, 
            and the 
            <span style="font-size: 1.2rem; font-style: italic;">Times Literary Supplement</span>. 
            Her most recent novel,
            <span style="font-size: 1.2rem; font-style: italic;"> Two-Step Devil</span>, 
            is the winner of the 2024 Willie Morris Award for Southern writing. It has also been named a 
            <span style="font-size: 1.2rem; font-style: italic;">New York Times</span>
            Editor's Choice, a 2025 ALA Notable Book, and a Best Book of 2024 by the 
            <span style="font-size: 1.2rem; font-style: italic;"> Paris Review </span>
            and the
            <span style="font-size: 1.2rem; font-style: italic;"> Atlanta Journal Constitution</span>. A new story collection is forthcoming from Grove Press.
          </span>
        </div>
        <div style="padding-bottom: 10px">
          <span style="font-size: 1.2rem;">Quatro’s fiction has appeared or is forthcoming in <a class="hyperlink" href="https://www.newyorker.com/magazine/2023/08/07/yogurt-days-fiction-jamie-quatro" target="_blank">The New Yorker</a>, <a class="hyperlink" href="https://www.theparisreview.org/fiction/8040/two-men-mary-jamie-quatro" target="_blank">The Paris Review</a>, <a class="hyperlink" href="https://harpers.org/archive/2024/08/ezekiel-machine-jamie-quatro-two-step-devil/" target="_blank">Harper’s</a>, the <a class="hyperlink" href="https://www.nybooks.com/online/2021/01/30/aubade/" target="_blank">New York Review of Books</a>, <a class="hyperlink" href="https://pshares.org/product/spring-2012/" target="_blank">Ploughshares</a>, and elsewhere. She is the recipient of fellowships from MacDowell, Yaddo, Bread Loaf, and La Maison Dora Maar in Ménerbes, France, where she will be in residence in 2025. Quatro holds an MA in English from the College of William and Mary and an MFA in fiction from the Bennington College Writing Seminars. She teaches in the Sewanee School of Letters MFA program, and lives with her family in Chattanooga, Tennessee.</span>
        </div>
      </div>
    </div>
  </div>
</template>

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

@media (min-width: 1000px) {

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