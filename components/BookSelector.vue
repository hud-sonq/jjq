<template>
    <div id="bookSelector">
        <div class="all-links">
            <div>
                <NuxtLink class="link" to="/tsd">
                    <div class="book-container">
                        <div class="book-cover-image-container">
                            <img class="book-image-itself" src="/img/tsd/book_compressed.png">
                        </div>
                        <div class="book-title">
                            <p style="font-style: italic;">Two-Step Devil</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink class="link" to="/fire-sermon">
                    <div class="book-container">
                        <div class="book-cover-image-container">
                            <img class="book-image-itself" src="/img/fs/book_compressed.png">
                        </div>
                        <div class="book-title">
                            <p style="font-style: italic;">Fire Sermon</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink class="link" to="/i-want-to-show-you-more">
                    <div class="book-container">
                        <div class="book-cover-image-container">
                            <img class="book-image-itself" src="/img/sym/book_compressed.png">
                        </div>
                        <div class="book-title">
                            <p style="font-style: italic;">I Want To Show You More</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink class="link" to="/other-work">
                    <div class="book-container">
                        <div class="book-cover-image-container">
                            <img class="book-image-itself" src="/img/RachelPerry_compressed.png">
                        </div>
                        <div class="book-title">
                            <p>Other Work</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
#bookSelector {
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.all-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
}

.link {
    text-decoration: none;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.book-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
}

.book-container:hover {
    transform: scale(1.1);
}

.book-image-itself {
    max-height: 256px;
}

.book-title {
    font-size: 1.5rem;
    color: black;
}

@media (min-width: 800px) {
    #bookSelector {
        /* flex-direction: row; */
        gap: 32px;
        justify-content: center;
    }
    .all-links {
        flex-direction: row;
        gap: 80px;
    }
}

</style>