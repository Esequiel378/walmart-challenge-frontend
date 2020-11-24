<template>
  <v-container>
    <v-alert v-if="error" class="text-center" text outlined color="red" icon="mdi-alert">
      {{ error }}
    </v-alert>
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

    error = '';

    @Watch('$route.query.query', { immediate: true })
    async fetchProducts() {
      const query = this.$route.query.query;

      if (parseInt(query)) {
        console.log('by id');
        this.$axios
          .$get(`/products/${query}`)
          .then((response) => {
            this.products = [response];
            this.error = '';
          })
          .catch((err) => {
            const query = this.$route.query.query;
            this.error = `No se pudo encontrar el producto: "${query}"`;
          });
      } else {
        this.$axios.$get(`/products/search?query=${query}`).then((response) => {
          this.products = response;

          this.error = '';

          if (response.length === 0) {
            const query = this.$route.query.query;
            this.error = `No se han encontrado productos para la busqueda: "${query}"`;
          }
        });
      }
    }
  }
</script>

<style></style>
