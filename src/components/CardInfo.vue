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

      <CardInfoRowItem
        v-for="block in blocks"
        :block="block"
        :key="block.blockId"
      ></CardInfoRowItem>
    </div>
  </div>
</template>

<script>
import CardInfoRowItem from "./CardInfoRowItem";
export default {
  components: {
    CardInfoRowItem,
  },
  data() {
    return {
      blocks: [],
    };
  },
  methods: {
    createdShortString(str) {
      if (str.length > 21) {
        const startString = str.slice(0, 11);
        const endString = str.slice(-10);
        return `${startString}...${endString}`;
      }
      return str;
    },
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

      for (let i = 0; i < 4; i++) {
        const obj = {
          volume: firebaseData[i].volume,
          fees: firebaseData[i].fees,
          number_of_operations: firebaseData[i].number_of_operations,
          сreated: this.createdDate(firebaseData[i].timestamp),
          blockId: firebaseData[i].level,
          baker: this.createdShortString(firebaseData[i].operationsHash),
        };
        this.blocks.push(obj);
      }

      // this.blocks = firebaseData.map((item) => {
      //   return {
      //     volume: item.volume,
      //     fees: item.fees,
      //     number_of_operations: item.number_of_operations,
      //     сreated: this.createdDate(item.timestamp),
      //     blockId: item.level,
      //     baker: this.createdShortString(item.operationsHash),
      //   };
      // });
    },
  },
  beforeMount() {
    this.loadRow();
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
  grid-auto-flow: row dense;
  padding: 20px 30px 22px;
  border-bottom: 1px solid #ecf4ff;
}
.card-info__row {
  font-size: 16px;
  line-height: 19px;
  color: #122232;
}
</style>>
