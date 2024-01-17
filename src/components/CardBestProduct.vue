<template>
    <div class="container">
        <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/food" class="btn btn-success float-end"
            ><i class="bi bi-eye"></i> Lihat Semuanya</router-link
          >
        </div>
      </div>
      <div class="row mb-4">
        <!-- Loop through best_products -->
        <div class="col-4 mt-4" v-for="product in best_products" :key="product.id">
          <!-- Card structure -->
          <div class="card shadow card-product">
            <img :src="`images/` + product.gambar" class="card-img-top" alt="..." />
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
    props: ["best_products"]
  };
  </script>
  
  <style lang="scss" scoped></style>
  