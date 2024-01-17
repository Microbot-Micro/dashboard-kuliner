<template>
  <div>
    <NavbarComponen />
    <div class="container">

      <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/bakso.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/kentang-goreng.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="images/mie-goreng.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
      </div> -->

      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search" type="text" class="form-control" placeholder="Cari Makanan Kesukaan anda"
              aria-label="Cari" aria-describedby="basic-addon1" @keyup="getProduct" />
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
        </div>
      </div>
    </div>
    <CardProduct :products="products" />
  </div>
</template>

<script>
import NavbarComponen from "@/components/NavbarComponen.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponen,
    CardProduct,
  },

  data() {
    return {
      products: [],
      search: "",
    };
  },

  methods: {
    async getProduct() {
      try {

        let apiUrl = `${process.env.VUE_APP_SERVER}/products`;

        if (this.search) {
          apiUrl += `?search=${this.search}`;
        }

        const { data } = await axios.get(apiUrl);
        this.products = data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
