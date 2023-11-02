<template>
<div>
  <AppHeader/>
  <router-view />
  <AppFooter/>
</div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  name: "customer-layout",
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>

</style>
