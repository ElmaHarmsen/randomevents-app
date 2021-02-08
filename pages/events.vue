<template>
  <div class="view__container">
    <h1 class="events__header">Future Events</h1>
    <div class="events__loop">
      <div v-for="event in getFutureEvents" :key="event._id" class="event__containter">
        <img class="event__picture" v-bind:src="`${baseURL}${event.Picture.url}`" />
        <div class="event__info">
          <h2>{{ event.Location }}, {{ new Date(event.Date) }}</h2>
          <h1>{{ event.Title }}</h1>
        </div>
      </div>
    </div>
    <h1 class="events__header header__past">Past Events</h1>
    <div class="events__loop">
      <div class="event__containter" v-for="event in futureEvents" :key="event._id">
        <img class="event__picture" v-bind:src="`${baseURL}${event.Picture.url}`" />
        <div class="event__info">
          <h2>{{ event.Location }}, {{ new Date(event.Date) }}</h2>
          <h1>{{ event.Title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventInterface } from "~/types.ts";

export default Vue.extend({
  data: function() {
    return {
      futureEvents: [] as EventInterface[]
    }
  },
  computed: {
    baseURL() {
      return process.env.NUXT_ENV_BASE_URL;
    },
    getFutureEvents(): EventInterface[] {
      return this.futureEvents.filter(event => new Date(event.Date).getTime() > Date.now());
    }
  },
  mounted: async function () {
    const rawFetch = await fetch('https://randomevents.herokuapp.com/events');
    const jsonFetch = await rawFetch.json();
    this.futureEvents = jsonFetch;
  }
})
</script>

<style lang="scss">
.view__container {
  .header__past {
    margin-top: 2.5rem;
  }
  .events__header {
    margin-bottom: 10px;
  }
  .events__loop {
    width: 100%;
  }
  .event__containter {
    background-color: #000;
    color: #fff;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    .event__info {
      padding: .8rem 1rem;
       
      h1 {
        padding-top: 10px;
      }
    }

    .event__picture {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>