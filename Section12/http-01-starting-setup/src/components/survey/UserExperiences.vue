<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <loader v-if='loading' />
        <h3 v-show="results.length === 0"> NO DATA </h3>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import Loader from '../UI/Loader.vue';
import axios from 'axios';

export default {
  data() {
    return {
      results: [],
      loading: false
    }
  },
  components: {
    SurveyResult,
    'loader': Loader
  },
  methods: {
    async loadResults() {
        let returnInfo;
        
        this.loading = true;
        returnInfo = await axios.get('https://vuejs-maxsch-default-rtdb.firebaseio.com/surveys.json');

        this.loading = false;
        this.results = returnInfo.data;
    }
  },
  mounted() {
    this.loadResults();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>