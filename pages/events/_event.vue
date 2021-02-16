<template>
  <div class="view__container">
    <div v-if="isLoading" class="global__loader">
      <img src="~/assets/images/loader.svg" alt="">
    </div>
    <div v-else class="_event__wrapper">
      <h1 class="events__header">{{ singleEvent.Title }}</h1>
      <div class="_event__picture-wrapper">
        <img class="global__event-picture _event__picture" src="~/assets/images/nyancat.jpg" alt="">
      </div>
      <div class="_event__info">
        <h1><i>Location</i> <br>{{ singleEvent.Location }}</h1>
        <h1><i>Date & Time</i> <br>{{ new Date(singleEvent.Date).toLocaleString("nl-NL") }}</h1>
        <h1><i>Contribution</i> <br>{{ '€' + singleEvent.Contribution }}</h1>
      </div>
      <div v-if="!pastEvent" class="_event__join-btn global__button">
        <h2>Join Event</h2>
      </div>
      <div class="_event__description">
        <h1><i>Description</i> <br>{{ singleEvent.Description }}</h1>
        <h1><i>Additional Info</i></h1>
        <span v-for="category in singleEvent.event_categories" v-bind:key="category.id">{{ category.Category + ', '}}</span>
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
      singleEvent: {} as EventInterface
    }
  },
  created: async function() {
    await this.fetchData();
    this.isLoading = false;
  },
  computed: {
    pastEvent(): boolean {
      return new Date(this.singleEvent.Date).getTime() < Date.now();
    }
  },
  methods: {
    async fetchData() {
      const rawFetch = await fetch(`https://randomevents.herokuapp.com/events/${this.$route.params.event}`);
      //event in ${this.$route.params.event} = the paramater which is also defined as _event by dynamic routing in Nuxt
      const jsonFetch = await rawFetch.json();
      this.singleEvent = jsonFetch;
      console.log(this.singleEvent)
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
  ._event__wrapper {
    width: 100%;

    ._event__picture-wrapper {
        width: 100%;

      ._event__picture {
        height: 250px;
        border-radius: 5px;

        @include screen-is(lg) {
          height: 450px;
        }
      }
    }

    ._event__info {
      width: 100%;
      margin-top: 2.5rem;
      text-align: left;

      h1 {
        line-height: 24px;
      }

      h1:nth-of-type(2) {
        margin: 21px 0;
      }
    }

    ._event__join-btn {
      width: 110px;
      position: sticky;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      margin: 2.5rem 0;
    }

    ._event__description {
      margin: 2.5rem 0;

      h1:nth-of-type(2) {
        margin-top: 21px;
      }

      span {
        font-size: 24px;
        font-weight: 700;

        @include screen-is(lg) {
          font-size: 28px;
        }
      }
    }

    @include screen-is(lg) {
      width: 45%;

      ._event__join-btn {
        width: 130px;
      }
    }
  }
}
</style>
