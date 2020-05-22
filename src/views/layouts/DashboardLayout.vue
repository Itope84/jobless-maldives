<template>
  <default-layout :wide="false">
    <slot></slot>
    <!-- Footer -->
    <footer class="border-t py-10 border-gray-light font-header">
      <base-container>
        <div class="flex flex-wrap">
          <div class="w-full md:w-7/12 text-font">
            <p>
              Copyright © 2020. Made with love by
              <strong class="font-semibold">Technosys Pvt Ltd</strong>
            </p>
            <p>
              <strong class="font-semibold">Need help?</strong> send your
              queries to mail@jobsicle.mv
            </p>
          </div>
          <div class="mx-auto md:mr-0 my-3 md:my-0">
            <p
              class="mb-0 text-primary border border-primary px-2 py-1 rounded-md"
            >
              A Jobsicle idea
            </p>
          </div>
        </div>
      </base-container>
    </footer>
  </default-layout>
</template>
<script>
import DefaultLayout from "./DefaultLayout";
export default {
  components: {
    DefaultLayout,
  },
};
</script>
