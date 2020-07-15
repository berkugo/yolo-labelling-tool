<template>
  <v-container fluid>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-col class="d-flex white--text" cols="12" sm="12">
            <v-select
              background-color="red darken-4"
              :items="items"
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
          md="3"
          sm="6"
          xs="6"
        >
          <v-card outlined color="red darken-4" class="mx-auto" max-width="300">
            <v-img
              class="black--text align-end"
              height="150px"
              :src="'data:image/jpeg;base64,' + item"
            >
            </v-img>

            <v-card-actions>
              <v-btn depressed color="white--text transparent" class="overline">
                <v-icon class="ma-2 white--text" size="17px">mdi-pencil</v-icon>
                LABEL</v-btn
              >

              <v-btn depressed color="white--text transparent" class="overline">
                <v-icon class="ma-2 white--text" size="17px"
                  >mdi-content-save</v-icon
                >
                SAVE</v-btn
              >
              <v-spacer></v-spacer>
              <span class="caption font-weight-bold white--text">{{
                imagesObject.fileNames[idx]
              }}</span>
            </v-card-actions>
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
  data: () => ({
    saved: false,
    imagesObject: {
      fileNames: [],
      images: [],
    },
  }),
};
</script>
