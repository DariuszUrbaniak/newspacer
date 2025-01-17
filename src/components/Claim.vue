<template>
  <div class="claimWrapper">
    <h1 class="claim">OUTER SPACE</h1>
    <p class="subclaim">
      Rozpocznij swoją podróż przez galaktykę, odkryj nowe miejsca.
    </p>
    <p>
      Wpisz nazwę planety.
    </p>
  </div>
</template>
<script>
export default {
  name: 'ClaimComponent',
};
</script>

<style scoped>
  .claimWrapper {
    text-align: center;
    margin-top: 50px;
  }

  .claim {
    font-size: 2em;
  }

  .subclaim {
    font-size: 1.2em;
  }
</style>

<style lang="scss" scoped>
  .claimWrapper {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .claim {
    font-size: 50px;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 80px;
    }

    @media (min-width: 1024px) {
      font-size: 100px;
    }
  }

  .subclaim {
    margin: 20px 0 0 0;
    font-size: 13px;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 17px;
      width: 500px;
      line-height: 1;
      letter-spacing: 1px;
    }
  }
</style>
