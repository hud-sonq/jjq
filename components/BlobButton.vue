<template>
  <div class="box-1">
    <div class="btn btn-one">
      <p>ENTER SITE</p>
    </div>
  </div>
</template>

<style scoped>

.btn-one {
  color: #ff0000;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  height: 32px;
}

.btn-one p {
  transition: all 0.3s;
  font-size: 24px;
}

.btn-one::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: rgb(255, 0, 0);
  border-bottom-color: rgb(255, 0, 0);
  transform: scale(0.1, 1);
}
.btn-one:hover span {
  letter-spacing: 2px;
}
.btn-one:hover::before {
  opacity: 1; 
  transform: scale(1, 1); 
}
.btn-one::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
}
.btn-one:hover::after {
  opacity: 0; 
  transform: scale(0.1, 1);
}
</style>