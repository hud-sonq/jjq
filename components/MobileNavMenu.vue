<template>
    <div id="mobileNavMenu">
        <div class="links-wrapper">
            <NuxtLink to="/books" style="text-decoration: none; color: black;" @click="$emit('linkClicked')"><span>BOOKS</span></NuxtLink>
            <NuxtLink to="/events" style="text-decoration: none; color: black;" @click="$emit('linkClicked')"><span>EVENTS</span></NuxtLink>
            <NuxtLink to="/about" style="text-decoration: none; color: black;" @click="$emit('linkClicked')"><span>ABOUT</span></NuxtLink>
            <NuxtLink to="/contact" style="text-decoration: none; color: black;" @click="$emit('linkClicked')"><span>CONTACT</span></NuxtLink>
        </div>
    </div>
</template>

<style scoped>

#mobileNavMenu {
    position: fixed;
    z-index: 10;
    top: 64px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fae7c6;
}

.links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
}

span {
    font-size: 32px;
}


</style>