import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const RESUME_FORMATS = [
//   'LIGHT', 'DARK', 'GREEN'
// ]

export default new Vuex.Store({
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    RESUME_FORMATS: state => state.resumeFormats,
    selectedResumeFormat: state => state.selectedResumeFormat,
  },
  state: {
    isAuthenticated: false,
    resumeFormats: [
      {
        key: "LIGHT",
        demo: "001-resume.png",
        background: "#f2f1f1",
      },
      {
        key: "DARK",
        demo: "002-resume.png",
        background: "#5e5e60",
      },
      {
        key: "GREEN",
        demo: "002-resume.png",
        background: "#01bbb1",
      },
    ],
    selectedResumeFormat: null,
  },
  mutations: {
    SELECT_RESUME_FORMAT: (state, payload) => {
      state.selectedResumeFormat = payload;
    },
  },
  actions: {
    selectFormat: ({ commit }, format) => {
      commit("SELECT_RESUME_FORMAT", format);
    },
  },
  modules: {},
});
