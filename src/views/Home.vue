<template>
  <div class="home">
    <AppBanner />
    <AppProducts />
  </div>
</template>

<script>
// @ is an alias to /src
import AppBanner from "../components/home/AppBanner";
import AppProducts from "../components/products/AppProducts";

export default {
  name: 'Home',
  components: {
    AppBanner,
    AppProducts,
  },

}
</script>
