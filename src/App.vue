<template>
  <div id="app">
    <router-view />
    <FooterComponen />
  </div>
</template>

<script>
import FooterComponen from "@/components/FooterComponen.vue";

export default {
  components: {
    FooterComponen,
  },
};
</script>
