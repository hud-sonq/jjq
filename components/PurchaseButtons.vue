<template>
        <!-- <div :href="link">
            <a  v-for="link in purchaseLinks" class="linka" :href="link.url" target="_blank">
                <div class="order-button"><BlobButton :text="link.name"/></div>
            </a>
        </div> -->
        <div class="buttons">
            <div v-for="link in purchaseLinks" class="linka" :href="link.url" target="_blank" @click="navigate(link.url)">
                <div class="order-button"><BlobButton :text="link.name"/></div>
            </div>
        </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    purchaseLinks: Array<{name: string, url: string}>;
}>()

const navigate = (url: any) => {
  window.open(url, '_blank')
}

</script>

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