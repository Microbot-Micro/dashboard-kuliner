<template>
  <div>
    <NavbarComponen />
    <div class="container">
      <div class="row mt-5 mb-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/food" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mb-3 ">
          <!-- Tampilkan gambar jika ada -->
          <img :src="`../images/` + product.gambar" class="img-fluid shadow" alt="" />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-3 ">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga: <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <!-- Tampilkan detail lainnya sesuai kebutuhan -->
          <form v-on:submit.prevent="pemesanan">
            <div class="form-group mt-3 mb-3">
              <label for="jumlah_pemesanan">Jumlah Pesanan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pesanan" />
            </div>
            <div class="form-group mt-3 mb-3">
              <label for="keterangan">Keterangan</label>
              <textarea v-model="pesan.keterangan" class="form-control"
                placeholder="Keterangan Spt: Peada, Nasi Setengah..." name="keterangan" id="keterangan"></textarea>
            </div>
            <button type="submit" class="btn btn-success"><i class="bi bi-cart-check"></i> Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponen from "@/components/NavbarComponen.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    NavbarComponen,
  },

  data() {
    return {
      apiUrl: process.env.VUE_APP_SERVER,
      product: {},
      pesan: {
        jumlah_pesanan: "",
        keterangan: "",
        product_id: null,
      }
    };
  },

  methods: {
    async getProductId() {
      try {
        const { data } = await axios.get(
          `${this.apiUrl}/products/${this.$route.params.id}`
        );
        this.product = data;
        this.pesan.product_id = this.product.id;
      } catch (error) {
        console.log(error);
      }
    },

    async pemesanan() {
      if (this.pesan.jumlah_pesanan <= 0) {
        return this.$toast.error("Jumlah Pesanan Tidak Boleh Kosong", { position: 'top-right' });
      } else {
        try {

          const { data } = await axios.post(
            `${this.apiUrl}/keranjangs`, this.pesan
          );
          this.pesan = data;
          this.$toast.success(`Pesanan ${this.product.nama} Berhasil Ditambahkan Keranjang.`, { position: 'top-right' });
          this.$router.push('/keranjang');
        } catch (error) {
          console.log(error);
          this.$toast.error("Pemesanan Anda gagal. Mohon coba lagi.", { position: 'top-right' });
        }
      }
    }
  },

  mounted() {
    this.getProductId();
  },
};
</script>


<style lang="scss" scoped></style>
