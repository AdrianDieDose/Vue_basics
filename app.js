const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h3>Start the course!</h3>",
      vueLink: "https://google.com/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumb = Math.random();
      if (randomNumb < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
