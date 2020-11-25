<template>
  <v-app-bar color="blue darken-3" fixed app>
    <v-container fluid>
      <v-row>
        <v-col md="3" align-self="center">
          <v-img
            src="https://www.lider.cl/catalogo/images/lider-logo.svg"
            max-height="100"
            max-width="120"
            contain
          ></v-img>
        </v-col>

        <v-col md="6" align-self="center">
          <v-text-field
            v-on:keyup.enter="search"
            solo
            rounded
            label="¿Qué estás buscando?"
            prepend-inner-icon="mdi-magnify"
            hide-details
            v-model="query"
          ></v-text-field>
        </v-col>

        <v-col md="3" class="d-flex align-content-center">
          <v-btn depressed large class="mx-1" color="success">
            <v-icon>mdi-cart-variant</v-icon>
            Supermercado
          </v-btn>

          <v-btn depressed large class="mx-1" color="blue darken-4">
            <v-badge :content="cart" :value="cart" color="green" inline>
              <v-icon color="amber">mdi-cart-outline</v-icon>
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({})
  export default class AppBar extends Vue {
    query = '';
    cart = 5;

    mounted() {
      const query = this.$route.query.query;

      if (query) {
        // @ts-ignore
        this.query = query;
      }
    }

    search() {
      const query = this.$route.query.query;

      // @ts-ignore
      if ((!this.query || this.query.length < 3) && isNaN(this.query)) {
        return;
      }

      if (this.query !== query) {
        this.$router.replace(`/catalogo/search?query=${this.query}`);
      }
    }
  }
</script>
