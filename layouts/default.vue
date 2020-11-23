<template>
  <v-app dark>
    <AppBar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import AppBar from '@/components/layouts/AppBar';

  export default {
    components: {
      AppBar,
    },
    data() {
      return {
        title: 'Lider',
      };
    },
  };
</script>
