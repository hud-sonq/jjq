<template>
    <BookDisplay v-bind="bookProps" />
</template>

<script setup lang="ts">
const bookProps = {
    book: 'fs',
    image: "/jjq/img/fs/book.png",
    showButtons: true,
    purchaseLinks: [
        {name: 'Parnassus', url: 'https://www.parnassusbooks.net/book/9780802128980'},
        {name: 'Bookshop', url: 'https://bookshop.org/p/books/fire-sermon-jamie-quatro/11063969?ean=9780802127044'},
        {name: 'Amazon', url: 'https://www.amazon.com/s?k=9780802127044&i=stripbooks&camp=1789&creative=9325&linkCode=ur2&tag=grovatla-20'},
        {name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/fire-sermon-jamie-quatro/1126743870?ean=9780802128980'}
    ]
}
</script>