<template>
  <div class="container">
    <div class="product-list">
      <div class="stm-row">
        <AppProductList :product="product" v-for="product in products" :key="product.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppProductList from "./AppProductList";
import firebase from 'firebase/compat/app'

export default {
  name: "AppProducts",
  components: {
    AppProductList
  },
  data: () => ({
    products: null
  }),
  async mounted() {
    try {
      this.products = (await firebase.database().ref(`/products`).once('value')).val() || {}
    } catch (e) {
      throw e
      console.log(e)
    }
  }

}
</script>

<style scoped>

</style>
