<template>
  <div class="searchWrapper">
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <input id="aaa-pp" name="search" v-model="searchValue" @input="handleInput" />
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
};
</script>
<style lang="scss" scoped>
    .searchWrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;

  input {
    height: 30px;
    border: 0;
    background: none;
    border-bottom: 1px solid black;
  }
}
</style>
