<template>
  <div class="view__container">
    <div v-if="isLoading" class="global__loader">
      <img src="~/assets/images/loader.svg" alt="">
    </div>
    <div v-else class="events__wrapper">
      <h1 class="events__header">Future Events</h1>
      <div class="events__loop">
        <div class="event__containter" v-for="event in getFutureEvents" :key="event._id">
          <NuxtLink class="event__link" v-bind:to="`/events/${event._id}`">
            <!-- <img class="event__picture" v-bind:src="`${baseURL}${event.Picture.url}`" /> -->
            <div class="event__picture-wrapper">
              <img class="global__event-picture" src="~/assets/images/runy.jpg" alt="">
            </div>
            <div class="event__info">
              <h2><i>{{ event.Location }}</i></h2>
              <h2><i>{{ new Date(event.Date).toLocaleDateString("nl-NL") }}</i></h2>
              <h1>{{ event.Title }}</h1>
            </div>
          </NuxtLink>
        </div>
      </div>
      <h1 class="events__header header__past">Past Events</h1>
      <div class="events__loop">
        <div class="event__containter" v-for="event in getPastEvents" :key="event._id">
          <NuxtLink class="event__link" v-bind:to="`/events/${event._id}`">
            <!-- <img class="event__picture" v-bind:src="`${baseURL}${event.Picture.url}`" /> -->
            <div class="event__picture-wrapper">
              <img class="global__event-picture" src="~/assets/images/nyancat.jpg" alt="">
            </div>
            <div class="event__info">
              <h2><i>{{ event.Location }}</i></h2>
              <h2><i>{{ new Date(event.Date).toLocaleDateString("nl-NL") }}</i></h2>
              <h1>{{ event.Title }}</h1>
            </div>
          </NuxtLink>
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
      isLoading: true,
      allEvents: [] as EventInterface[]
    }
  },
  created: async function() {
    await this.fetchData();
    this.isLoading = false;
  },
  computed: {
    baseURL() {
      return process.env.NUXT_ENV_BASE_URL;
    },
    getFutureEvents(): EventInterface[] {
      return this.allEvents.filter(event => new Date(event.Date).getTime() > Date.now());
    },
    getPastEvents(): EventInterface[] {
      return this.allEvents.filter(event => new Date(event.Date).getTime() < Date.now());
    }
  },
  methods: {
    async fetchData() {
      const rawFetch = await fetch('https://randomevents.herokuapp.com/events');
      const jsonFetch = await rawFetch.json();
      this.allEvents = jsonFetch;
    }
  },
  mounted: function () {
    this.fetchData()
  }
})
</script>

<style lang="scss">
@import '@/assets/global.scss';

.view__container {
  .events__wrapper {
    width: 100%;
    .header__past {
      margin-top: 2.5rem;
    }
    .events__loop {
      width: 100%;

      @include screen-is(lg) {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
      }
    }
    .event__containter {
      background-color: #080808;
      color: #fff;
      margin-bottom: 10px;
      border-radius: 5px;

      @include screen-is(lg) {
        flex: 0 1 25%;
        margin-right: 20px;
        margin-bottom: 20px;
      }

      .event__link {
        .event__picture-wrapper {
          width: 100%;
          height: 250px;
          overflow: hidden;            
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;

          @include screen-is(lg) {
            height: 300px;
          }
          
          img {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            transition: .25s ease;
          }
        }

        .event__info {
          padding: 1rem 1.4rem;
          
          h1 {
            padding-top: 10px;
            font-weight: 800;
            color: #ff4500;
            text-transform: capitalize;
          }
        }
      }
    }
    .event__containter:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>