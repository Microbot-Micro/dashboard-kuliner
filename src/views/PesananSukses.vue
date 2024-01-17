<template>
    <NavbarComponen/>
    <div class="pesanan-sukses">
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col text-center mt-2 mb-2">
                    <img src="../assets/images/sukses.svg" width="300" alt="">
                    <h2><strong>Sukses!!</strong></h2>
                    <h4>Pesanan Anda Segera Diproses <br> Selamat Menunggu</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponen from "@/components/NavbarComponen.vue";

export default {
    name: 'PesananSukses',
    components: {
        NavbarComponen
    }
}

</script>

<style lang="scss" scoped></style>