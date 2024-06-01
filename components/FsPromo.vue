<template>
  <div id="wrapper">
    <div class="fs-split">
      <div class="fs-cover">
        <img src="/img/fs/book.png" alt="Fire Sermon cover">
      </div>
      <div>
        <PurchaseButtons />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

#wrapper {
  width: 100%;
  height: 100%;
  /* position: absolute;
  top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.fs-split {
  min-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fs-cover {

}

.fs-cover img {
  max-width: 600px;
  max-height: 500px;
}

@media (min-width: 800px) {
  .fs-split {
    min-width: 100%;
    flex-direction: row;
  }
}


</style>