<template>
  <div class="container">
    <form method="post" class="add_product_form">
      <input type="text" v-model="productName" name="productName" placeholder="Product Title...">
      <input type="number" v-model="productPrice" name="productPrice" placeholder="Product Price...">
      <textarea type="text" v-model="productCategory" name="productDesc" placeholder="Product Category...">
      </textarea>
      <input type="file"  accept="image/jpeg" @change=uploadImage>
      <img :src="preview" class="img-fluid" />

      <button @click.prevent="addProductHandler" >Add Product</button>
    </form>

    <div>
      <div>1</div>
      <div><router-link to="/admin/product-edit"> test </router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data: () => ({
    productName: null,
    productPrice: null,
    productImg: null,
    productCategory: null,
    preview: null,
    product: {}
  }),
  methods:{
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.productImg = e.target.result;
        this.preview = e.target.result;
      };
    },
    addProductHandler() {

      // Собираем данные о продукте
      this.product = {
        title: this.productName,
        price: this.productPrice,
        image: this.productImg,
        category: this.productCategory,
        id: new Date(),
      };

      // Вызываем действие Vuex для добавления продукта
      this.$store.dispatch('addProduct', this.product);

      // Очищаем поля формы после добавления продукта
      this.productName = null;
      this.productPrice = null;
      this.productImg = null;
      this.productCategory = null;
      this.preview = null;

    },
  }
}
</script>

<style scoped>

</style>
