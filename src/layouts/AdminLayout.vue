<template>
  <div>
    <AdminHeader/>
    <router-view/>
  </div>
</template>

<script>
import AdminHeader from "../views/admin/AdminHeader";
export default {
  name: "admin-layout",
  components: {
    AdminHeader
  }

}
</script>

<style scoped>

</style>
