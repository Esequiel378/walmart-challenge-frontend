<template>
  <v-card shaped class="mx-auto my-2">
    <v-img height="150" alt="Error al cargar la imagen" :src="`https://${product.image}`"></v-img>

    <v-card-title>{{ product.brand }}</v-card-title>

    <v-card-text>
      <div>{{ product.description }}</div>

      <div class="text-h6 font-weight-bold">
        <span>$ {{ getProductPriceWithDiscount() }}</span>
        <v-chip dark color="red" class="mx-1"> {{ product.discount }} % </v-chip>
      </div>
      <div class="subtitle-1 text-decoration-line-through">$ {{ product.price }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row>
        <v-col>
          <v-chip outlined color="blue darken-2" class="my-1">
            <v-icon class="mx-1">mdi-car-pickup</v-icon>
            despacho
          </v-chip>

          <v-chip outlined color="orange darken-2" class="my-1">
            <v-icon class="mx-1">mdi-home-variant</v-icon>
            retiro
          </v-chip>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-row class="d-flex justify-center">
        <v-btn dark rounded color="blue darken-3">Agregar</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import { Product } from '@/components/layouts/types.ts';

  @Component
  export default class ProductCard extends Vue {
    @Prop() product!: Product;

    getProductPriceWithDiscount() {
      const discount = (this.product.price as number) * ((this.product.discount as number) / 100);

      return (this.product.price as number) - discount;
    }
  }
</script>
