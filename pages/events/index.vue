<template>
  <div class="view__container">
    <div v-if="isLoading" class="global__loader">
      <img src="~/assets/images/loader.svg" alt="">
    </div>
    <div v-else class="events__wrapper">
      <h1 class="events__header">Future Events</h1>
      <EventsFilter v-bind:eventsLength="getFutureEvents.length"/>
      <div class="events__loop">
        <EventCard v-for="event in getFutureEvents" :key="event._id" v-bind:eventData="event" />
      </div>
      <h1 class="events__header header__past">Past Events</h1>
      <div class="events__loop">
        <EventCard v-for="event in getPastEvents" :key="event._id" v-bind:eventData="event" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventInterface } from "~/types.ts";
import EventsFilter from "~/components/EventsFilter.vue";
import EventCard from '~/components/EventCard.vue';

export default Vue.extend({
  transition: "page",
  head() {
    return {
      title: 'Events page',
      meta: [
        {
          hid: 'Events. Future events. Past events.',
          name: 'Random Events.',
          content: 'Index of events. Index of single event.'
        }
      ]
    }
  },
  data: function() {
    return {
      isLoading: true,
      allEvents: [] as EventInterface[]
    }
  },
  components: {
    EventsFilter,
    EventCard
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
          height: 225px;
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
          padding: .6rem 1rem;
          
          h1 {
            padding-top: 10px;
            font-weight: 800;
            color: #ff4500;
            text-transform: capitalize;
          }

          @include screen-is(lg) {
            padding: 1rem 1.4rem;
          }
        }

        .event__category {
          position: relative;
          z-index: 2;
          right: 0;
          bottom: 0;
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