<template>
  <div class="app_header">
    <div class="app_logo">
      <img src="../assets/images/disney.png" alt="">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AppHeader',
}
</script>


<style>
.app_header {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  -webkit-box-shadow: -1px 0px 9px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -1px 0px 9px 2px rgba(34, 60, 80, 0.2);
  box-shadow: -1px 0px 9px 2px rgba(34, 60, 80, 0.2);
}

.app_logo img {
  width: 135px;
}

.app_logo {
  height: 58px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  position: relative;
  display: inline-block;
  text-decoration: none;
}



#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #42b983;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
#nav a:hover:after {
  width: 100%;
  left: 0;
}


</style>
