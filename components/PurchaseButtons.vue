<template>
    <div class="buttons">
        <a class="linka" href="https://www.parnassusbooks.net/book/9780802163134" target="_blank">
            <div class="order-button"><BlobButton text="Parnassus"/></div>
        </a>
        <a class="linka" href="https://bookshop.org/p/books/two-step-devil/20490963?ean=9780802163134" target="_blank">
            <div class="order-button"><BlobButton text="Bookshop"/></div>
        </a>
        <a class="linka" href="https://www.amazon.com/dp/0802163130" target="_blank">
            <div class="order-button"><BlobButton text="Amazon"/></div>
        </a>
        <a class="linka" href="https://www.barnesandnoble.com/w/two-step-devil-jamie-quatro/1144929218" target="_blank">
            <div class="order-button"><BlobButton text="Barnes & Noble"/></div>
        </a>
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
    width: 365px;
}

.order-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.linka {
    text-decoration: none; 
    text-align: center;
}

@media (min-width: 800px) {
    .buttons {
        width: 100%;
    }
}
</style>