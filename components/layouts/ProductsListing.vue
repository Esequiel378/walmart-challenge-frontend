<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-for="item in items" :key="item.id">
        <ProductCard :item="item" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import ProductCard from '@/components/layouts/ProductCard.vue';

  @Component({
    components: {
      ProductCard,
    },
  })
  export default class ProductsListing extends Vue {
    page = 1;
    items = [
      {
        id: 1,
        brand: 'Marca1',
        description: "Televisión 54''",
        image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
        price: 80000,
      },
      {
        id: 2,
        brand: 'Marca1',
        description: 'Microondas 120W',
        image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
        price: 40000,
      },
      {
        id: 3,
        brand: 'Marca1',
        description: 'Horno Gas Premium',
        image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
        price: 30000,
      },
    ];

    mounted() {
      this.fetchProducts();
    }

    async fetchProducts() {
      this.$axios.$get('/products').then((response) => {
        this.items = response;
      });
    }
  }
</script>

<style></style>
