<template>
  <NavbarComponen :getKeranjangs="keranjangs" />
  <div class="container">
    <!-- Broadcumb -->
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
              Keranjang
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- Broadcumb -->

    <div class="row mb-2 mt-2">
      <div class="col">
        <h2>Keranjang <strong>Saya</strong></h2>
      </div>
      <div class="table-responsive mt-3">
        <table class="table">
          <thead class="table-secondary">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Tatol Harga</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
              <th>{{ index + 1 }}</th>
              <td>
                <img :src="'../images/' + keranjang.product.gambar" class="img-fluid shadow" width="150px" />
              </td>
              <td>{{ keranjang.product.nama }}</td>
              <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
              <td>{{ keranjang.jumlah_pesanan }}</td>
              <td>Rp. {{ keranjang.product.harga }}</td>
              <td>
                Rp.
                <strong>
                  {{
                    keranjang.jumlah_pesanan * keranjang.product.harga
                  }}</strong>
              </td>
              <td>
                <button @click="delKeranjang(keranjang.id)" class="btn btn-danger">
                  <i class="bi bi-trash-fill"></i> Hapus
                </button>
              </td>
            </tr>

            <tr>
              <td colspan="6" align="right">
                <strong>Total Harga:</strong>
              </td>
              <td>
                Rp. <strong>{{ totalHarga }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row justify-content-end">
      <div class="col-md-6 mb-2 mt-2">
        <form v-on:submit.prevent="postPesanan">
          <div class="form-group mt-3 mb-3">
            <label for="nama" class="mb-2"><strong>Nama Pelanggan</strong></label>
            <input type="text" class="form-control" v-model="pesanan.nama" />
          </div>
          <div class="form-group mt-3 mb-3">
            <label for="noMeja" class="mb-2"><strong>No Meja</strong></label>
            <input type="text" class="form-control" v-model="pesanan.noMeja" />
          </div>
          <button type="submit" class="btn btn-success float-end">
            <i class="bi bi-cart-check"></i> Checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import NavbarComponen from "@/components/NavbarComponen.vue";
import axios from "axios";

export default {
  name: "KeranjangView",
  components: {
    NavbarComponen,
  },

  data() {
    return {
      apiUrl: process.env.VUE_APP_SERVER,
      keranjangs: [],
      pesanan: {
        nama: '',
        noMeja: '',
        keranjang_id: null
      }
    };
  },

  methods: {

    // postPesanan
    async postPesanan() {
    if (this.pesanan.nama.trim() === "" || this.pesanan.noMeja.trim() === "") {
      this.$toast.error(`Nama dan Nomor Meja harus diisi.`, { position: 'top-right' });
    } else {
      try {
        await axios.post(`${this.apiUrl}/pesanans`, this.pesanan);
        this.$toast.success(`Sukses Di Pesan`, { position: 'top-right' });
        this.$router.push('/pesanan-sukses');
        await axios.delete(`${this.apiUrl}/keranjangs`);
        this.keranjangs = [];
        this.pesanan = {
          nama: '',
          noMeja: '',
          keranjang_id: null
        };
      } catch (error) {
        console.log(error);
        this.$toast.error("Pemesanan Anda gagal. Mohon coba lagi.", { position: 'top-right' });
      }
    }
  },

    //getKeranjangs
    async getKeranjangs() {
      try {
        const { data } = await axios.get(`${this.apiUrl}/keranjangs`);

        if (data.length > 0) {
          const firstKeranjangId = data[0].id;
          this.pesanan.keranjang_id = firstKeranjangId;
        }

        this.keranjangs = data;
      } catch (error) {
        console.log(error);
      }
    },


    // delKeranjang
    async delKeranjang(id) {
      try {
        const deletedKeranjang = this.keranjangs.find(keranjang => keranjang.id === id);
        await axios.delete(`${this.apiUrl}/keranjangs/${id}`);
        this.keranjangs = this.keranjangs.filter(keranjang => keranjang.id !== id);
        this.$toast.success(`Pesanan Keranjang Anda ${deletedKeranjang.product.nama} Berhasil diihapus`, { position: 'top-right' });
      } catch (error) {
        console.error('Error in delKeranjang:', error);
        this.$toast.error(`Gagal Menghapus Keranjang`, { position: 'top-right' });
      }
    },

  },

  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (total, keranjang) {
        return total + keranjang.jumlah_pesanan * keranjang.product.harga;
      }, 0);
    }
  },

  mounted() {
    this.getKeranjangs();
  },

};
</script>


<style lang="scss" scoped></style>