<template>
  <div class="view__container">
    <h1 class="events__header">Future Events</h1>
    <div class="events__loop">
      <div class="event__containter" v-for="event in getFutureEvents" :key="event._id">
        <NuxtLink class="event__link" v-bind:to="`/events/${event._id}`">
          <!-- <img class="event__picture" v-bind:src="`${baseURL}${event.Picture.url}`" /> -->
          <img class="event__picture" src="~/assets/images/runy.jpg" alt="">
          <div class="event__info">
            <h2><i>{{ event.Location }}</i></h2>
            <h2><i>{{ new Date(event.Date).toLocaleString("nl-NL") }}</i></h2>
            <h1>{{ event.Title }}</h1>
          </div>
        </NuxtLink>
      </div>
    </div>
    <h1 class="events__header header__past">Past Events</h1>
    <div class="events__loop">
      <div class="event__containter" v-for="event in futureEvents" :key="event._id">
        <NuxtLink class="event__link" v-bind:to="`/events/${event._id}`">
          <!-- <img class="event__picture" v-bind:src="`${baseURL}${event.Picture.url}`" /> -->
          <img class="event__picture" src="~/assets/images/runy.jpg" alt="">
          <div class="event__info">
            <h2><i>{{ event.Location }}</i></h2>
            <h2><i>{{ new Date(event.Date).toLocaleString("nl-NL") }}</i></h2>
            <h1>{{ event.Title }}</h1>
          </div>
        </NuxtLink>
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
  .events__loop {
    width: 100%;
  }
  .event__containter {
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,161,0,1) 15%, rgba(255,234,0,1) 30%, rgba(131,255,0,1) 45%, rgba(0,242,255,1) 60%, rgba(4,107,193,1) 80%, rgba(118,0,255,1) 96%);     border-radius: 9px;
    color: #000;
    padding: 2px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    .event__link {

      .event__info {
        padding: .8rem 1rem;
        background-color: #fff;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        
        h1 {
          padding-top: 10px;
        }
      }

      .event__picture {
        width: 100%;
        object-fit: contain;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
  }
}
</style>