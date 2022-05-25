import Vue from "vue";
import Vuex from "vuex";

export default {
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
        this.error = "";
      }
    },

    decreaseScore(state, player_name) {
        const player = state[player_name];
      try {
        if (player.score > 0) {
          player.score -= 1;
          player.showAlert = false;
        } else {
          player.showAlert = true;
          throw new Error("Score cannot be negative");
        }
      } catch (error) {
        this.error = error;
      }
      console.log(player.score);
    },

    nameChange(player) {
      let name = prompt("Please enter your name");
      while (name === "" || name === null) {
        alert("Must enter a name");
        name = prompt("Please enter your name");
      }
      player.name = name;
      console.log(player);
    }
  }
};
