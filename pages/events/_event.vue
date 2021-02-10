<template>
  <div class="view__container">
    <h1 class="events__header">{{ singleEvent.Title }}</h1>
    <div class="_event__picture-wrapper">
      <img class="_event__picture" src="~/assets/images/runy.jpg" alt="">
    </div>
    <div class="_event__info">
      <h1><i>Location</i> <br>{{ singleEvent.Location }}</h1>
      <h1><i>Date</i> <br>{{ new Date(singleEvent.Date).toLocaleString("nl-NL") }}</h1>
      <h1><i>Contribution</i> <br>€{{ singleEvent.Contribution }}</h1>
    </div>
    <div class="_event__join-btn global__button">
      <h2>Join Event</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: function() {
    return {
      singleEvent: {}
    }
  },
  mounted: async function () {
    const rawFetch = await fetch(`https://randomevents.herokuapp.com/events/${this.$route.params.event}`);
    //event in ${this.$route.params.event} = the paramater which is also defined as _event by dynamic routing in Nuxt
    const jsonFetch = await rawFetch.json();
    this.singleEvent = jsonFetch;
  }
})
</script>

<style lang="scss">
.view__container {
  ._event__picture-wrapper {
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,161,0,1) 15%, rgba(255,234,0,1) 30%, rgba(131,255,0,1) 45%, rgba(0,242,255,1) 60%, rgba(4,107,193,1) 80%, rgba(118,0,255,1) 96%);     border-radius: 9px;
    padding: 2px;

    ._event__picture {
      width: 100%;
      object-fit: contain;
      border-radius: 9px;
    }
  }

  ._event__info {
    width: 100%;
    margin: 2.5rem 0;
    text-align: left;

    h1 {
      line-height: 24px;
    }

    h1:nth-of-type(2) {
      margin: 21px 0;
    }
  }

  ._event__join-btn {

  }
}
</style>
