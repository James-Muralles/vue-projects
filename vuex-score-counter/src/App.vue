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
import{ mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  computed: mapState(['player_1', 'player_2', 'error', 'showAlert']),
  methods: mapMutations(['increaseScore', 'decreaseScore', 'showAlert', 'nameChange']),
 


}
</script>

<style>
.player-score {
  font-size: 4rem;
  font-weight: bold;
}
</style>
