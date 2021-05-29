<template>
  <div class="card-info">
    <h2 class="card-info__title">Tezos blocks</h2>
    <div class="card-info__wrapper">
      <div class="card-info__row card-info__row-header">
        <span>Block ID</span>
        <span>Baker</span>
        <span>Created</span>
        <span># of operations</span>
        <span>Volume</span>
        <span>Fees</span>
      </div>

      <div class="card-info__row card-info__row-item">
        <span>{{ blocks.blockId }}</span>
        <span>{{ blocks.baker }}</span>
        <span>{{ blocks.сreated }}</span>
        <span>{{ blocks.number_of_operations }}</span>
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
        number_of_operations: "відсутні данні",
        сreated: "відсутні данні",
        baker: "відсутні данні",
        blockId: "відсутні данні",
      },
    };
  },
  methods: {
    createdDate(time) {
      const date = new Date(time);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    },
    async loadRow() {
      const response = await fetch(
        "https://api.teztracker.com/v2/data/tezos/mainnet/blocks"
      );

      const firebaseData = await response.json();

      this.blocks.volume = firebaseData[0].volume;
      this.blocks.fees = firebaseData[0].fees;
      this.blocks.number_of_operations = firebaseData[0].number_of_operations;
      this.blocks.сreated = this.createdDate(firebaseData[0].timestamp);
      // this.blocks.baker = firebaseData[0].operationsHash;
      this.blocks.blockId = firebaseData[0].level;
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
