<template>
  <v-container>
    <ProductsListing :products="products" />
  </v-container>
</template>

<script>
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import ProductsListing from '@/components/layouts/ProductsListing';

  @Component({
    components: {
      ProductsListing,
    },
  })
  export default class Catalogo extends Vue {
    products = [];

    mounted() {
      this.fetchProducts();
    }

    async fetchProducts() {
      this.$axios.$get('/products').then((response) => {
        this.products = response;
      });
    }
  }
</script>

<style></style>
