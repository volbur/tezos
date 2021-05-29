<template>
  <div class="card-info__row card-info__row-item">
    <span>{{ blocks.blockId }}</span>
    <span>{{ blocks.baker }}</span>
    <span>{{ blocks.сreated }}</span>
    <span>{{ blocks.number_of_operations }}</span>
    <span>{{ blocks.volume }}</span>
    <span>{{ blocks.fees }}</span>
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

      console.log(firebaseData);
    },
  },
};
</script>
