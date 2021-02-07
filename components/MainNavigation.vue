<template>
  <div>
    <!-- Menu button + content phone -->
    <div class="navigation__menu" @click="toggleNavigation">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="navigation__content" v-show="navigationOpened">
      <div class="content__links"  @click="toggleNavigation">
        <NuxtLink to="/"><h1>Home</h1></NuxtLink>
        <NuxtLink to="/events"><h1>Random Events</h1></NuxtLink>
      </div>
      <div class="content__newsletter">
        <input type="email" placeholder="your@email.here" />
        <div class="global__button">
          <h2>Submit</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function() {
    return {
      navigationOpened: false
    }
  },
  methods: {
    toggleNavigation() {
      this.navigationOpened = !this.navigationOpened;
    }
  }
})
</script>

<style lang="scss">
.navigation__menu {
  width: 2rem;
  height: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: absolute;
  z-index: 2;

  &:hover > span {
    height: 2px;
  }

  span {
    display: block;
    background-color: #ff0000;
    width: 2rem;
    height: 1px;
  }
}
.navigation__content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: calc(100vh - .8rem);
  width: calc(100vw - 1.6rem);
  background-color: #fff;
  position: absolute;
  z-index: 1;

  .content__links h1 {
    margin: 15px 0px;
  }

  .content__newsletter {
    width: 100%;
    position: absolute;
    bottom: .8rem;
    display: grid;
    grid-template-columns: 70% 1fr;
    gap: .8rem;

    input {
      height: 32px;
      border: 2px solid #000;
      padding: 0 .5rem;
      font-family: "source";
    }
  }
}
</style>