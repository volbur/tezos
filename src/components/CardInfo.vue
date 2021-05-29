<template>
  <div class="card-info">
    <h2 class="card-info__title">Tezos blocks</h2>
    <div class="card-info__wrapper">
      <div class="card-info__row">
        <span>Block ID</span>
        <span>Baker</span>
        <span>Created</span>
        <span># of operations</span>
        <span>Volume</span>
        <span>Fees</span>
      </div>

      <div class="card-info__row">
        <span>1,466,366</span>
        <span>tz1cXeGHP8U</span>
        <span>11.05.2021 04:28:46</span>
        <span>33</span>
        <span>{{ blocks.volume }}</span>
        <span>{{ blocks.fees }}</span>
      </div>
    </div>
    <button @click="loadRow">show data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: {
        volume: "відсутні данні",
        fees: "відсутні данні",
      },
    };
  },
  methods: {
    async loadRow() {
      const response = await fetch(
        "https://api.teztracker.com/v2/data/tezos/mainnet/blocks"
      );
      const firebaseData = await response.json();

      console.log(firebaseData[0]);
    },
  },
};
</script>

<style scoped>
.card-info {
  padding: 16px 0 26px;
  width: 740px;
  border: 1px solid #c8c5ef;
  box-shadow: 0px 10px 40px rgba(36, 21, 220, 0.1);
  border-radius: 4px;
}
.card-info__title {
  margin: 0;
  padding-left: 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
}
.card-info__row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px 30px 22px;
  border-bottom: 1px solid #ecf4ff;
}
.card-info__row {
  font-size: 16px;
  line-height: 19px;
  color: #122232;
}
</style>>
