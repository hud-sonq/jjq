<template>
    <div id="contactContainer">
        <div class="items">
            <div class="pic-container">
                <img src="/img/contact_portriat_compressed.png" class="pic-itself">
            </div>
            <div class="content">
                <h3 style="white-space:pre-wrap; margin: 0; padding: 0;">LITERARY AGENT</h3>
                <p class="" style="white-space:pre-wrap; ">Anna Stein, <a href="https://www.caa.com">CAA</a><br>(212) 556-5755<br><a href="mailto:anna.stein@icmpartners.com">anna.stein@caa.com</a></p>
                <h3 style="white-space:pre-wrap; margin: 0; padding: 0;">SPEAKING AGENT</h3>
                <p class="" style="white-space:pre-wrap;">Leslie Shipman, <a href="https://www.theshipmanagency.com/">THE SHIPMAN AGENCY</a> leslie@theshipmanagency.com</p>
                <h3 style="white-space:pre-wrap; margin: 0; padding: 0;">PUBLICITY</h3><p class="" style="white-space:pre-wrap;">John Mark Boling, <a href="https://groveatlantic.com/">GROVE/ATLANTIC</a><br><a href="mailto:jmboling@groveatlantic.com">jmboling@groveatlantic.com</a></p>
                <p class="" style="white-space:pre-wrap;">Deb Seager, <a href="https://groveatlantic.com/">GROVE/ATLANTIC</a><br><a href="mailto:dseager@groveatlantic.com">dseager@groveatlantic.com</a></p>
                <h3 style="white-space:pre-wrap; margin: 0; padding: 0;">FILM / TELEVISION</h3><p class="" style="white-space:pre-wrap;">Brooke Ehrlich, <a href="https://www.anonymouscontent.com/management/">ANONYMOUS CONTENT </a>(310) 489-4356; brooke@sanfordehrlich.com</p>
            </div>
        </div>
    </div>
</template>

<style scoped>


#contactContainer {
    padding-top: 16px;
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.items {
    width: 100%;
    max-height: 600px;

}
    
.pic-container {
    display: none;
}

.pic-itself {
    max-height: 550px;
    object-fit: contain;
}

.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
@media (min-width: 800px) {
    #contactContainer {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .pic-container {
        display: flex;
    }

    .items {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
    }

    .content {
        padding-left: 4%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
}

</style>