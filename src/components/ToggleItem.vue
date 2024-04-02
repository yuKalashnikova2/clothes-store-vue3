<script setup>
const props = defineProps({
    link: {
        type: String,
        default: '/cart',
    },
})
</script>

<template>
    <router-link
        :to="link"
        :class="['toggle__item', { toggle__item_active: $route.path === link }]"
    >
        <svg
            v-if="link === '/favorites'"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z"
                stroke="#3C4242"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <svg
            v-if="link === '/user'"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.99992 11.6666C12.3011 11.6666 14.1666 9.8011 14.1666 7.49992C14.1666 5.19873 12.3011 3.33325 9.99992 3.33325C7.69873 3.33325 5.83325 5.19873 5.83325 7.49992C5.83325 9.8011 7.69873 11.6666 9.99992 11.6666ZM9.99992 11.6666C6.31802 11.6666 3.33325 13.9052 3.33325 16.6666M9.99992 11.6666C13.6818 11.6666 16.6666 13.9052 16.6666 16.6666"
                stroke="#3C4242"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </svg>

        <svg
            v-if="link === '/cart'"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.5 3.33325H3.00526C3.85578 3.33325 4.56986 3.97367 4.6621 4.81917L5.3379 11.014C5.43014 11.8595 6.14422 12.4999 6.99474 12.4999H14.205C14.9669 12.4999 15.6317 11.9833 15.82 11.2451L16.9699 6.73584C17.2387 5.68204 16.4425 4.65733 15.355 4.65733H5.5M5.52063 15.5207H6.14563M5.52063 16.1457H6.14563M14.6873 15.5207H15.3123M14.6873 16.1457H15.3123M6.66667 15.8333C6.66667 16.2935 6.29357 16.6666 5.83333 16.6666C5.3731 16.6666 5 16.2935 5 15.8333C5 15.373 5.3731 14.9999 5.83333 14.9999C6.29357 14.9999 6.66667 15.373 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2935 15.4602 16.6666 15 16.6666C14.5398 16.6666 14.1667 16.2935 14.1667 15.8333C14.1667 15.373 14.5398 14.9999 15 14.9999C15.4602 14.9999 15.8333 15.373 15.8333 15.8333Z"
                stroke="#3C4242"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </svg>
    </router-link>
</template>

<style lang="scss" scoped>
.toggle__item {
    cursor: pointer;
    width: 44px;
    height: 44px;
    background-color: #f6f6f6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg path {
        width: 20px;
        height: 20px;
    }
    &_active {
        background: #8a33fd;
        & svg path {
            stroke: white;
        }
    }
}
</style>
