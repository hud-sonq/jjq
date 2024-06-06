<template>
    <BookDisplay v-bind="bookProps" />
</template>

<script setup lang="ts">

const bookProps = {
    book: 'sym',
    image: "/jjq/img/sym/book.png",
    showButtons: true,
    purchaseLinks: [
        {name: 'Parnassus', url: 'https://www.parnassusbooks.net/book/9780802122230'},
        {name: 'Bookshop', url: 'https://bookshop.org/p/books/i-want-to-show-you-more-jamie-quatro/12459872?ean=9780802122230'},
        {name: 'Amazon', url: 'https://www.amazon.com/dp/B009W73XWE/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1'},
        {name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/i-want-to-show-you-more-jamie-quatro/1112319055?ean=9780802122230'}
    ]
}


</script>