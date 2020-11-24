<template>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({})
  export default class AppBar extends Vue {

    created() {
      this.$router.replace('/catalogo')
    }
  }
</script>
