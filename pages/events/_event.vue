<template>
  <div class="view__container">
    <h1 class="events__header">{{ singleEvent.Title }}</h1>
    <div class="_event__wrapper">
      <div class="_event__picture-wrapper">
        <img class="global__event-picture _event__picture" src="~/assets/images/nyancat.jpg" alt="">
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
@import '@/assets/global.scss';

.view__container {
  ._event__wrapper {
    width: 100%;

    ._event__picture-wrapper {
        width: 100%;

      ._event__picture {
        height: 250px;

        @include screen-is(lg) {
          height: 450px;
        }
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
      width: 120px;
      margin: 0 auto;
    }

    @include screen-is(lg) {
      width: 50%;

      ._event__join-btn {
        width: 120px;
        margin: 0 auto;
      }
    }
  }
}
</style>
