<template>
  <v-app style="background-color: black;">
    <NavBar />
    <SideBar />
    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/HelloWorld.vue";
import SideBar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",

  components: {
    NavBar,
    SideBar,
    Main,
  },
  mounted() {},
  data: () => ({}),
};
</script>
