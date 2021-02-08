<template>
  <div>
    <div class="layout__header">
      <MainNavigation />
      <!-- <img class="header__logo" src="~/assets/images/d10.svg" /> -->
    </div>
    <Nuxt />
    <div class="layout__footer">
      <small>Random Events 2021 - view creator at <a href="https://www.elmaharmsen.nl/">elmaharmsen.nl</a></small>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainNavigation from '~/components/MainNavigation.vue'

export default Vue.extend({
  components: {
    MainNavigation
  }
})
</script>

<style lang="scss">
div {
  .layout__header {
    text-align: center;
    height: 24px;
    margin-bottom: 2.5rem;

    .header__logo {
      width: 55px;
    }
  }

  .layout__footer {
    height: 10px;
    margin-top: 2.5rem;
  }
}
</style>
