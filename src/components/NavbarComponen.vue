<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">Dashboard Kuliner</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/food">Food</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">Keranjang
                <i class="bi bi-cart-check-fill"></i>
                <span class="badge text-bg-success" style="margin-left: 0.5rem;">
                  {{ lenghtKeranjang.length ? lenghtKeranjang.length : keranjangs?.length || 0 }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavbarComponen",
  data() {
    return {
      apiUrl: process.env.VUE_APP_SERVER,
      lenghtKeranjang: []
    }
  },

  props: {
    keranjangs: {
      type: Array,
      required: true,
    },
  },

  methods: {

    //getLenghtKeranjang
    async getLenghtKeranjang() {
      try {
        const { data } = await axios.get(`${this.apiUrl}/keranjangs`);
        this.lenghtKeranjang = data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getLenghtKeranjang();
  }
};
</script>

<style lang="scss" scoped></style>
