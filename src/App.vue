<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import DashboardLayout from "./views/layouts/DashboardLayout";

export default {
  components: {
    DashboardLayout,
  },

  computed: {
    layout() {
      const defaultLayout = "dashboard";
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
};
</script>

<style lang="scss"></style>
