const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    updateShow() {
      this.show = !this.show;
    },
  },
});

app.mount("#app");
