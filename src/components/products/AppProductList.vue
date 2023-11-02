<template>
    <div class="">
      <div class="white-box">
        <div class="wishlist-icon">
          <a href="javascript:void(0);"><img src="@/assets/images/heart.png"/>
          </a>
        </div>
        <div class="product-img">
          <img
              :src="product.image">
        </div>
        <div class="product-bottom">
          <div class="product-name">{{ product.title }}</div>
          <div class="price">
            <span class="rupee-icon">₹</span> {{ product.price }}
          </div>
          <a :href="`/?add-to-cart=${product.id}`" class="blue-btn">Add to cart</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AppProductList",
  props: ['product']
}
</script>

<style>

</style>
