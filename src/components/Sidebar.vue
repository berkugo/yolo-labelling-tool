<template>
  <v-navigation-drawer
    fixed
    expand-on-hover
    mini-variant
    color="black"
    app
    dark
    permanent
  >
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-icon
            align="center"
            class="ma-1 text-center center-align red--text darken-3"
            >mdi-menu</v-icon
          >

          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-content>
                <v-list-item-title @click="item.event" class="overline">
                  {{ item.title }}
                  <v-icon class="ma-2 red--text darken-4" size="17px">{{
                    item.icon
                  }}</v-icon></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list></v-col
        >
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { openFileEvent } from "../renderer/file.js";

export default {
  mounted() {},

  methods: {
    openFolder() {
      openFileEvent();
    },
  },
  data() {
    return {
      items: [
        {
          title: "Open Folder",
          icon: "mdi-folder",
          event: this.openFolder,
        },
        {
          title: "Save All",
          icon: "mdi-content-save",
          event: () => console.log("a"),
        },

        {
          title: "About",
          event: () => console.log("a"),
          icon: "mdi-information",
        },
      ],
    };
  },
};
</script>
