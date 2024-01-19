<template>
    <div class="mt-5 mb-5">
        <hr />
        <div class="row">
            <div class="col text-center">
                2024 Copyright  <i class="bi bi-github" @click="goToGitHub"> Microbot-Micro</i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
        methods: {
            goToGitHub() {
                window.open('https://github.com/Microbot-Micro/dashboard-kuliner', '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
