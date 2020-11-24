<template>
  <v-container>
    <ProductsListing :products="products" />
  </v-container>
</template>

<script>
  import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
  import ProductsListing from '@/components/layouts/ProductsListing';

  @Component({
    components: {
      ProductsListing,
    },
  })
  export default class Search extends Vue {
    products = [];

    @Watch("$route.query.query", { immediate: true })
    async fetchProducts() {
      const query = this.$route.query.query;

      this.$axios.$get(`/products/search?query=${query}`).then((response) => {
        this.products = response;
      });
    }
  }
</script>

<style></style>
