<template>
  <div class="container">
    <div class="row">
      <!-- Loop through products -->
      <div class="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3" v-for="product in products" :key="product.id">
        <!-- Card structure (same as above) -->
        <div class="card shadow card-product">
          <img
            :src="`images/` + product.gambar"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              <strong>{{ product.nama }}</strong>
            </h5>
            <p class="card-text">Harga: Rp. {{ product.harga }}</p>
            <router-link :to="'/food/'+product.id" class="btn btn-success"
              ><i class="bi bi-cart-check"></i> Pesan</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["products"],
};
</script>

<style lang="scss" scoped></style>
