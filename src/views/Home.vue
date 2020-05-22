<template>
  <div class="home">
    <div class="pt-24">
      <base-container>
        <div class="lg:w-5/12 mb-12">
          <h1 class="text-4xl font-bold mb-3">Unemployed & Anxious?</h1>
          <p class="text-font xl:text-lg">
            Stop worrying. Hope starts here. <br />
            We help you <strong class="font-semibold">reach out</strong> to
            employers. <br />
            <strong class="font-semibold">16,954 Jobseekers onboard</strong>
          </p>
        </div>
      </base-container>
      <div class="border-t border-gray-light">
        <base-container class="relative">
          <div class="lg:w-5/12 pr-4 pt-10 lg:py-10">
            <h1 class="text-4xl font-bold mb-4">Tell your story</h1>
            <p class="text-font mb-4 xl:text-lg">
              <strong
                >Talent can’t hide! Create your career <br />
                profile with our
                <a href="#" class="decorated-link"
                  >Online Resume Builder</a
                ></strong
              >
            </p>
            <div class="text-font">
              <ul class="check-list xl:text-lg">
                <li>On demand vetting service</li>
                <li>Expose your resume to 100s of employers</li>
                <li>Get alerts on new job offers</li>
                <li>Search & apply for jobs anywhere, anytime</li>
                <li>FREE Trainings</li>
              </ul>
            </div>
          </div>
          <div
            class="md:w-7/12 ml-auto featured-resume-container"
            aria-label="Image describing featured resumes"
          >
            <div class="image-0">
              <img
                src="@/assets/images/home-layouts/light01.png"
                alt="Featured resume light variant"
              />
            </div>
            <div class="image-1">
              <img
                src="@/assets/images/home-layouts/dark01.png"
                alt="Featured resume light variant"
              />
            </div>
            <div class="image-2">
              <img
                src="@/assets/images/home-layouts/green01.png"
                alt="Featured resume light variant"
              />
            </div>
          </div>
        </base-container>
      </div>

      <div class="py-5 bg-gray-light">
        <div class="container mx-auto xl:w-10/12 px-10">
          <ol
            class="md:flex lg:text-lg flex-wrap justify-between list-decimal font-bold font-header"
          >
            <li>Choose a design</li>
            <li>Build your resume</li>
            <li>Get vetted</li>
            <li>Let us help</li>
          </ol>
        </div>
      </div>

      <div class="py-16 border-b border-gray-light">
        <base-container class="flex flex-col items-center">
          <h1 class="text-4xl font-bold mb-3">Choose Your Design</h1>
          <p class="text-lg">To get started, select a resume template below.</p>

          <div class="md:flex my-10 lg:w-11/12 xl:w-9/12 justify-between">
            <div
              v-for="(format, index) in RESUME_FORMATS"
              :key="`format-${index}`"
              class="w-56 border rounded-lg border-gray-light relative resume-option"
            >
              <img :src="require(`@/assets/images/${format.demo}`)" alt="" />
              <button
                @click="selectFormat(format)"
                class="py-3 px-16 bg-gray rounded-md text-white hover:bg-orange font-bold absolute mb-4 mx-auto bottom-0"
                :class="{
                  'bg-orange':
                    format.key ===
                    (selectedResumeFormat && selectedResumeFormat.key),
                }"
              >
                {{
                  format.key ===
                  (selectedResumeFormat && selectedResumeFormat.key)
                    ? "Selected"
                    : "Select"
                }}
              </button>
            </div>
          </div>

          <h2 class="text-4xl font-bold mb-2 mt-10">What’s Next?</h2>
          <p class="text-lg mb-5">Showcase your talent and skills</p>
          <button
            class="py-3 px-20 bg-primary rounded-md text-white hover:bg-orange font-bold font-header"
          >
            Let's Start
          </button>
        </base-container>
      </div>

      <div class="py-16">
        <base-container class="">
          <h3 class="font-bold mb-3 text-4xl">
            Data and Privacy Control<span
              class="icon-https text-sm text-font inline-block"
            ></span>
          </h3>

          <p class="text-lg font-header">
            Your resume will only be visible to
            <strong class="text-primary">verified</strong> employers (companies,
            institutions, resorts) registered with us. We don’t share your
            information with anyone else. Your data stays safe.
          </p>
        </base-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["RESUME_FORMATS", "selectedResumeFormat"]),
  },
  methods: {
    ...mapActions(["selectFormat"]),
  },
};
</script>
<style lang="scss" scoped>
.featured-resume-container {
  @media (min-width: theme("screens.lg")) {
    position: absolute;
    height: 600px;
    width: 650px;
    max-width: 55%;
    right: 20px;
    padding-top: 0px;
  }
  position: relative;
  padding-top: 85%;
  width: calc(100% - 50px);
  margin: 0px auto;
  bottom: 0;
  overflow-y: hidden;

  @for $i from 0 to 3 {
    .image-#{$i} {
      position: absolute;

      width: calc(100% - 210px);
      bottom: 0px;
      transform: translateX($i * 105px);

      @media (max-width: calc(theme("screens.md") - 10px)) {
        width: calc(100% - 100px);
        bottom: 0px;
        transform: translateX($i * 50px);
      }
    }
  }
}

.resume-option {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
}

.icon-https {
  transform: translateY(-10px);
}
</style>
