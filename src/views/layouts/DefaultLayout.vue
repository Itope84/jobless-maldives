<template>
  <div id="app">
    <header class="py-4 md:border-b border-gray-light">
      <div
        class="flex items-center mx-auto px-3"
        :class="wide ? 'md:px-10' : 'md:px-10 xl:w-10/12 container'"
      >
        <div class="flex">
          <a href="#"
            ><img
              src="@/assets/images/jobless-logo.png"
              alt="Jobless Logo"
              class="logo"
          /></a>
          <p class="text-font ml-2 font-bold font-header" aria-hidden="true">
            in Maldives
          </p>
        </div>
        <button class="navbar-toggle px-2 md:hidden ml-auto" aria-hidden="true">
          <i class="icon-bars"></i>
        </button>
        <nav class="ml-auto md:block" :class="{ hidden: !showMobileNav }">
          <ul
            class="list-none nav-list md:flex items-center"
            aria-hidden="false"
          >
            <li class="nav-item" v-if="!isAuthenticated">
              <a
                href="#"
                class="nav-link text-font focus:text-primary hover:text-primary font-semibold font-header"
                >Login</a
              >
            </li>
            <template v-else>
              <li>
                <a
                  href="#"
                  class="nav-link text-font focus:text-primary hover:text-primary font-semibold font-header"
                  >Dashboard</a
                >
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    wide: Boolean,
  },
  data() {
    return {
      showMobileNav: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
img.logo {
  width: 100px;
}
</style>
