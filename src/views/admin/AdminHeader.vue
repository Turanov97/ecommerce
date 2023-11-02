<template>
  <div>
    <div class="admin_header">
      <div class="container">
        <div class="admin_nav">
          <div class="admin_nav_item">1</div>
          <div class="admin_nav_item">2</div>
          <div class="admin_nav_item">
            <svg class="vbp-header-menu-button__svg" :class="{'menu-open': headerMenu}" @click="headerMenuTrigger">
              <line x1="0" y1="50%" x2="100%" y2="50%" class="top" shape-rendering="crispEdges" />
              <line x1="0" y1="50%" x2="100%" y2="50%" class="middle" shape-rendering="crispEdges" />
              <line x1="0" y1="50%" x2="100%" y2="50%" class="bottom" shape-rendering="crispEdges" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
  data: () => ({
    headerMenu: false,
  }),
  methods: {
    headerMenuTrigger () {
      this.headerMenu = !this.headerMenu;
    }
  }
}
</script>

<style scoped>

</style>
