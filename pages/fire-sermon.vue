<template>
    <BookDisplay v-bind="bookProps" />
</template>

<script setup lang="ts">
const bookProps = {
    book: 'fs',
    image: "/jjq/img/fs/book.png",
    showButtons: true
}
</script>