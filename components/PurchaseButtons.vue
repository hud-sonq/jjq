<template>
    <div class="buttons">
        <div class="order-button">
            <a class="linka" href="https://www.parnassusbooks.net/book/9780802163134" target="_blank">
                Parnassus
            </a>
        </div>
        <div class="order-button">
            <a class="linka" href="https://bookshop.org/p/books/two-step-devil/20490963?ean=9780802163134" target="_blank">
                Bookshop
            </a>
        </div>
        <div class="order-button">
            <a class="linka" href="https://www.amazon.com/dp/0802163130" target="_blank">
                Amazon
            </a>
        </div>
        <div class="order-button">
            <a class="linka" href="https://www.barnesandnoble.com/w/two-step-devil-jamie-quatro/1144929218" target="_blank">
                Barnes & Noble
            </a>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 72px;
}

.order-button {
    padding: 4px;
    border: 1px solid red;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.4s;
    width: 64px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.order-button:hover {
    background-color: red;
}

.linka {
    text-decoration: none;
    text-align: center;
    color: black;
}

.order-button:hover > .linka {
  color: white;
}
</style>