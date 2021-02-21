<template>
  <div class="event__containter">
    <NuxtLink class="event__link" v-bind:to="`/events/${eventData._id}`">
      <div class="event__picture-wrapper">
        <img v-if="getPicture !== undefined" class="global__event-picture" v-bind:src="getPicture" />
        <img v-else class="global__event-picture" src="~/assets/images/logo-tab.png" alt="">
      </div>
      <div class="event__info">
        <h2><i>{{ eventData.Location }}</i></h2>
        <h2><i>{{ new Date(eventData.Date).toLocaleDateString("nl-NL") }}</i></h2>
        <h1>{{ eventData.Title }}</h1>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventInterface } from "~/types.ts";

export default Vue.extend({
  props: {
    eventData: {
      required: true,
      type: Object
    }
  },
  computed: {
    getPicture() {
      const event: EventInterface = this.eventData as EventInterface;
      return event.Picture?.formats.small.url;
    }
  }
})
</script>

<style lang="scss">

</style>