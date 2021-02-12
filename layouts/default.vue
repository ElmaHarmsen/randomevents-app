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
@import '@/assets/global.scss';

div {
  .layout__header {
    text-align: center;
    height: 24px;
    margin-bottom: 2.5rem;

    @include screen-is(lg) {
      height: 60px;
      margin-bottom: 3rem;
    }

    .header__logo {
      width: 55px;
    }
  }

  .layout__footer {
    height: 10px;
    margin-top: 2.5rem;

    @include screen-is(lg) {
      margin-top: 3rem;
    }

    a {
      background: linear-gradient(90deg, rgba(255,69,0,1) 0%, rgba(255,158,0,1) 100%); 
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
