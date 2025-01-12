<template>
  <div class="wrapper">
    <ClaimComponent />
    <SearchInput />
  </div>
</template>
<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import ClaimComponent from './components/Claim.vue';
import SearchInput from './components/Searchinput.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'App',
  components: {
    ClaimComponent,
    SearchInput,
  },
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function handleSearch() {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis,com/css?family=Montserrat:300,400,600,800');

$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-bold: 600;
$font-weight-black: 800;

* {
    box-sizing: border-box;
  }

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 30px;
    width: 100%;
    height: 100vh;
    background-image: url('./assets/heroimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0;
}
</style>
