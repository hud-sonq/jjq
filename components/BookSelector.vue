<template>
    <div id="bookSelector">
        <NuxtLink class="link" to="/tsd">
            <div class="book-container">
                <div class="book-cover-image-container">
                    <img class="book-image-itself" src="/img/tsd/book.png">
                </div>
                <div class="book-title">
                    <h2>Two-Step Devil</h2>
                </div>
            </div>
        </NuxtLink>
        <div class="book-container">
            <div class="book-cover-image-container">
                <img class="book-image-itself" src="/img/tsd/book.png">
            </div>
            <div class="book-title">
                <h2>Fire Sermon</h2>
            </div>
        </div>
        <div class="book-container">
            <div class="book-cover-image-container">
                <img class="book-image-itself" src="/img/tsd/book.png">
            </div>
            <div class="book-title">
                <h2>I Want To Show You More</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
#bookSelector {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
}

.link {
    text-decoration: none;
    color: black;
}

.book-container {
    width: 80%;
    height: 256px;
    display: flex;
    flex-direction: row;
}

.book-cover-image-container {
    flex: 0 0 33%;
}

.book-image-itself {
    max-height: 256px;
}

.book-title {
    font-size: 1.5rem;
    color: black;
    justify-self: flex-end;
}
</style>