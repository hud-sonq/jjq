<template>
    <div class="footer" ref="footer">
        <div class="footer-content">
            <div><p>Copyright © 2024 by Jamie Quatro</p></div>
            <div>
                <p style="padding-left: 12px; padding-right: 12px;">|</p>
            </div>
            <div style="display: flex; justify-content: center; align-items: center; height: 16px;">
                <div style="height: 100%;">
                    <a href="https://www.instagram.com/jamiejquatro/" target="_blank">
                        <img src="/icons/ig_logo.svg" style="cursor: pointer; height: 100%;"/>
                    </a>
                </div>
            </div>
            <div>
                <p style="padding-left: 12px; padding-right: 12px;">|</p>
            </div>
            <div>
                <a href="https://byhudson.dev" target="_blank" style="text-decoration: underline; color: black;"><p>u like this site?</p></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    height: 64px;
    background-color: #fae7c6;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>