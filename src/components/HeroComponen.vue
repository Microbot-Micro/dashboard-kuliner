<template>
  <div class="container">
    <div class="d-none d-md-block">
      <div class="hero">
        <div class="row">
          <div class="col-md-6 mt-3 mb-3">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2>
                  <strong>Deliciuos Food Menu</strong> <br />
                  In your Gadget
                </h2>
                <p>Ayo Segera pilih dan pesan makanan favorit Anda</p>
                <!-- <router-link class="btn btn-lg btn-success">Pesan</router-link> -->
                <router-link class="btn btn-lg btn-success" to="/food">
                <i class="bi bi-arrow-right"></i> Pesan
              </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-3 mb-3">
            <img src="../assets/images/Hero.svg" width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <img src="../assets/images/Hero.svg" width="100%" alt="" />
        </div>
        <div class="col-md-6 mt-3 mb-3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Deliciuos Food Menu</strong> <br />
                In your Gadget
              </h2>
              <p>Ayo Segera pilih dan pesan makanan favorit Anda</p>
              <!-- <router-link class="btn btn-lg btn-success">Pesan</router-link> -->
              <router-link class="btn btn-lg btn-success" to="/food">
                <i class="bi bi-arrow-right"></i> Pesan
              </router-link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponen",
};
</script>

<style lang="scss" scoped></style>
