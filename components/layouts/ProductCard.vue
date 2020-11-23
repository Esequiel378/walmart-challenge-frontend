<template>
  <v-card shaped class="mx-auto my-2">
    <!-- TODO: img not loading properly -->
    <v-img height="150" alt="Error al cargar la imagen" :src="`https://${item.image}`"></v-img>

    <v-card-title>{{ item.brand }}</v-card-title>

    <v-card-text>
      <div>{{ item.description }}</div>

      <div class="subtitle-1">$ {{ item.price }}</div>
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

  @Component
  export default class ProductCard extends Vue {
    @Prop() item!: Object;
  }
</script>
