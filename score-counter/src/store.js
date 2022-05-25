import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player_1: {
      name: "Player 1",
      score: 0
    },
    player_2: {
      name: "Player 2",
      score: 0
    },
    error: "",
    showAlert: false
  },
  mutations: {
    increaseScore(state, player_name) {
      const player = state[player_name];
      player.score += 1;
      if (player.score > 0) {
        player.showAlert = false;
        this.error = "";
      }
      console.log(player);
    },
    decreaseScore(state, player_name) {
      const player = state[player_name];
      try {
        if (player.score > 0) {
          player.score -= 1;
          player.showAlert = false;
          console.log(this.error);
        } else {
          player.showAlert = true;
          console.log(this.error);
          throw new Error("Score cannot be negative");
        }
      } catch (error) {
        this.error = error;
        console.log(state)
      }
    },
    nameChange(state, player_name) {
      const player = state[player_name];
      let name = prompt("Please enter your name");
      while (name === "" || name === null) {
        alert("Must enter a name");
        name = prompt("Please enter your name");
      }
      player.name = name;
      console.log(player);
    }
  }
});
