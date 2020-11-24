<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-for="(product, i) in products" :key="i">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import ProductCard from '@/components/layouts/ProductCard.vue';
  import { Product } from './types';

  @Component({
    components: {
      ProductCard,
    },
  })
  export default class ProductsListing extends Vue {
    @Prop() products!: Array<Product>
  }
</script>

<style></style>
