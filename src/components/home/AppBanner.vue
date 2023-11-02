<template>
  <div class="app_banner_background">
    <div class="app_banner container">
      <div class="app_banner_item">
        <h2 class="app_banner_title">
          Unique things for unique personalities
        </h2>
        <p class="app_banner_text">
          In our store we have brought together the best collections of fashion brands to help you express your individuality.
          style and sense of taste. Whether you're looking for casual wear, stylish outfits for special occasions
          or
          accessories that will highlight your uniqueness, we have everything you need
        </p>
        <AppBtn :url="url"  />
      </div>
      <div class="app_banner_item">
        <img src="@/assets/images/images.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
import AppBtn from "../views/AppBtn";

export default {
  components: {
    AppBtn
  },
  data: () => ({
    url: 'https://stylemix.net'
  })

}

</script>
