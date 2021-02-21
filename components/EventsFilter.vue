<template>
  <div class="events__sub-info">
    <h1><i>Displaying {{ eventsLength }}/{{ eventsLength }} events</i></h1>
    <div class="events__filter global__button">
      <h2>Filter</h2>
    </div>        
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    eventsLength: Number
  },
})
</script>

<style lang="scss">
@import '@/assets/global.scss';

.events__sub-info {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;

  h1 {
    padding-right: .7rem;
  }

  .events__filter {
    width: auto;
    text-transform: capitalize !important;
    background-color: transparent;
    padding: .5rem .7rem;
  }
}
</style>