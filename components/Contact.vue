<template>
    <div id="contactContainer">
        <div class="items">
            <div class="pic-container">
                <img src="/img/tsd/wink_square.gif" class="pic-itself">
            </div>
            <div class="content">
                <div class="ctg">
                    <h3 style="white-space: pre-wrap; padding: 0;">LITERARY AGENT</h3>
                    <p class="" style="white-space:pre-wrap; ">Anna Stein</p>
                    <p class="" style="white-space:pre-wrap; "><a href="https://www.caa.com">CAA</a></p>
                    <p>anna.stein@caa.com</p>
                </div>
                <div class="ctg">
                    <h3 style="white-space:pre-wrap; padding: 0;">SPEAKING AGENT</h3>
                    <p class="" style="white-space:pre-wrap;">Leslie Shipman</p>
                    <p class="" style="white-space:pre-wrap;"><a href="https://www.theshipmanagency.com/">THE SHIPMAN AGENCY</a></p>
                    <p class="" style="white-space: pre-wrap">leslie@theshipmanagency.com</p>
                </div>
                <div class=ctg>
                    <h3 style="white-space:pre-wrap; padding: 0;">PUBLICITY</h3>
                    <p class="" style="white-space: pre-wrap;">John Mark Boling</p>
                    <p class="" style="white-space: pre-wrap;"><a href="https://groveatlantic.com/">GROVE/ATLANTIC</a></p>
                    <p class="" style="white-space: pre-wrap;">jmboling@groveatlantic.com</p>
                </div>
                <div class=ctg>
                    <h3 style="white-space:pre-wrap; padding: 0;">FILM / TELEVISION</h3>
                    <p class="" style="white-space: pre-wrap;">Brooke Ehrlich</p>
                    <p><a href="https://www.anonymouscontent.com/management/">ANONYMOUS CONTENT </a></p>
                    <p>brooke@sanfordehrlich.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ctg {
    margin-bottom: 4px;
    width: 100%;
}

h3 {
    font-size: 1.4rem;
    margin-bottom: 4px;
    font-weight: 100;
}

p {
    font-size: 1.2rem;
    margin-bottom: 4px;
    margin-top: 4px;
}

a {
    font-size: 1.2rem;
    color: #669be5;
}

a:hover {
    text-decoration: underline;
}

#contactContainer {
    padding-top: 16px;
    height: 100%;
    width: 100%;
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
    max-height: 350px;
    object-fit: contain;
}

.content {
    margin-left: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (min-width: 800px) {
    #contactContainer {
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .pic-container {
        display: flex;
    }

    .items {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }

    .content {
        padding-left: 4%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    a {
        text-decoration: none;
    }
}
</style>