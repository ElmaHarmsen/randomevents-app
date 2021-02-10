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

    a {
      background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,161,0,1) 15%, rgba(255,234,0,1) 30%, rgba(131,255,0,1) 45%, rgba(0,242,255,1) 60%, rgba(4,107,193,1) 80%, rgba(118,0,255,1) 96%);     border-radius: 9px;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
