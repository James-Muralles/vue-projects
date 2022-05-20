<template>
  <div id="app" class="container">
    <h1 class="text-center">Player Score Counter</h1>

    <div class="card">


      <div class="text-center">
        <button  v-if="this.error" class="alert alert-dismissible alert-secondary" name="alert" variant="danger"
          dismissible>
          {{ this.error }}
        </button>

      </div>


      <div class="card-body text-center">
        <h3 @click="nameChange(player_1)">{{ player_1.name }}</h3>
        <button @click="decreaseScore(player_1)" type="button" class="btn btn-danger">DOWN</button>
        <span class="player-score">{{ player_1.score }}</span>
        <button @click="increaseScore(player_1)" type="button" class="btn btn-success">UP</button>
      </div>

      <div class="card-body text-center">
        <h3 @click="nameChange(player_2)">{{ player_2.name }}</h3>
        <button @click="decreaseScore(player_2)" type="button" class="btn btn-danger">DOWN</button>
        <span class="player-score">{{ player_2.score }}</span>
        <button @click="increaseScore(player_2)" type="button" class="btn btn-success">UP</button>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({

    player_1:
    {
      name: 'Player 1',
      score: 0
    },

    player_2:
    {
      name: 'Player 2',
      score: 0
    },

    error: '',

    showAlert: false,

  }),
  methods: {
    increaseScore(player) {
      player.score += 1
      if (player.score > 0) {
        this.error = ''

      }


      console.log(player)



    },

    decreaseScore(player) {
      try {

        if (player.score > 0) {
          player.score -= 1
          player.showAlert = false
        } else {
          player.showAlert = true
          throw new Error('Score cannot be negative')


        }
      } catch (error) {
        this.error = error


      }
      console.log(player.score)

    },

    renamePlayer(obj, oldName, newName) {
      obj[newName] = obj[oldName];
      delete obj[oldName];
    },

    nameChange(player) {
      let name = prompt("Please enter your name");
      while (name === '' || name === null) {
        alert('Must enter a name');
        name = prompt("Please enter your name");

      }
      player.name = name;
      console.log(player)
    }


  }



}
</script>

<style>
.player-score {
  font-size: 4rem;
  font-weight: bold;
}
</style>
