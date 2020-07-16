<template>
  <v-container fluid>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-col class="d-flex white--text" cols="12" xssm="12">
            <v-select
              background-color="red darken-4"
              dark
              label="Outlined style"
              color="white--text"
              outlined
              class="overline"
            ></v-select> </v-col
        ></v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          v-for="(item, idx) in imagesObject.images"
          :key="item"
          class="white--text"
          md="4"
          sm="6"
          xs="6"
        >
          <v-card outlined color="red darken-4" class="mx-auto">
            <v-img
              class="black--text align-end"
              height="300px"
              :src="'data:image/jpeg;base64,' + item"
            >
            </v-img>

            <v-card-actions>
              <v-btn
                @click="canvasOp(idx)"
                depressed
                color="white--text transparent"
                class="overline"
              >
                <v-icon class="ma-2 white--text" size="17px">mdi-pencil</v-icon>
                LABEL</v-btn
              >

              <v-btn depressed color="white--text transparent" class="overline">
                <v-icon class="ma-2 white--text" size="17px"
                  >mdi-content-save</v-icon
                >
                SAVE</v-btn
              >
            </v-card-actions>
            <v-card-title class="caption font-weight-bold white--text">{{
              imagesObject.fileNames[idx]
            }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { fileListener, readFromFolder } from "./../renderer/file.js";

export default {
  name: "Main",
  mounted() {
    fileListener(async (event, args) => {
      this.imagesObject = await readFromFolder(args[0]);
    });
  },

  methods: {

    canvasOp(idx)
    {
      console.log(idx)
    }
  },
  data: () => ({
    saved: false,
    imagesObject: {
      fileNames: [],
      images: [],
    },
  }),
};
</script>
