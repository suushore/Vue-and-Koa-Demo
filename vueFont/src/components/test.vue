<template>
  <div class="test">
    <button type="button" @click="getJson">GetJSON</button>
    <div class="showJson">{{json}}</div>
  </div>
</template>

<script>
import {store} from "../vuex"
export default {
  name: 'test',
  computed : {
    json(){
      return store.state.json;
    }
  },
  methods : {
    getJson(){
      store.dispatch("getJson");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showJson{
    width:500px;
    margin:10px auto;
    min-height:500px;
    background-color: palegreen;
  }
</style>
                         