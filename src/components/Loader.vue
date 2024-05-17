<template>
    <div class="loader">
        <div class="loader__elem"></div>
        <h2 class="loader__text">Please, waiting...</h2>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 10;
    &__elem {
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: contain;
        background: url('/spinner-icon.svg') no-repeat;
        animation: spinnerAnimation 2s linear infinite;
    }

    @keyframes spinnerAnimation {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }

        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    &__text {
        color: var(--green-light);
        font-size: 16px;
        font-family: 300;
        padding-top: 10px;
    }
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
}
</style>
