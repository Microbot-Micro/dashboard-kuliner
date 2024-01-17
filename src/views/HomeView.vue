<template>
  <div class="home">
    <NavbarComponen />
    <HeroComponen />
    <CardBestProduct :best_products="best_products" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponen from "@/components/NavbarComponen.vue";
import HeroComponen from "@/components/HeroComponen.vue";
import CardBestProduct from "@/components/CardBestProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponen,
    HeroComponen,
    CardBestProduct,
  },

  data() {
    return {
      apiUrl: process.env.VUE_APP_SERVER,
      best_products: []
    };
  },

  methods: {
    setProduct(data) {
      this.best_products = data;
    },

    //getBestProduct
    async getBestProduct() {
      try {
        const { data } = await axios.get(`${this.apiUrl}/products`);
        this.best_products = data;
      } catch (error) {
        console.log(error);
      }
    },

  },

  mounted() {
    this.getBestProduct();
  },
};
</script>
