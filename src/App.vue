<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

import AdminLayout from "./layouts/AdminLayout";
import CustomerLayout from "./layouts/CustomerLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'customer') + '-layout'
    }
  },
  components: {
    AdminLayout, CustomerLayout
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

</style>
