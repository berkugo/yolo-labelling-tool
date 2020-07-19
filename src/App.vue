<template>
  <v-app style="background-color: black;">
    <NavBar />
    <SideBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/HelloWorld.vue";
import SideBar from "./components/Sidebar.vue";
export default {
  name: "App",

  components: {
    NavBar,
    SideBar,
  },
  mounted() {

  },
  data: () => ({}),
};
</script>
