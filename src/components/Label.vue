<template>
  <v-row>
    <v-col md="8" sm="6" xs="6">
      <v-img
        contain
        eager
        aspect-ratio="1.3"
        class="ma-1"
        :src="'data:image/jpeg;base64,' + base64"
      >
            <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
      </v-img
    ></v-col>
  </v-row>
</template>

<script>
export default {
  name: "Label",
  mounted() {
    this.base64 = this.$route.params.base64;
  },
  data: () => ({
    base64: "",
  }),
};
</script>
