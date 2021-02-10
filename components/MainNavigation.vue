<template>
  <div>
    <!-- Menu button + content phone -->
    <div class="navigation__menu" @click="toggleNavigation" v-bind:class="{open: navigationOpened}">
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
        <h1>Monthly newsletter</h1>
        <div class="newsletter__signup">
          <input type="email" placeholder="your@email.here" />
          <div class="global__button">
            <h2>Submit</h2>
          </div>        
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

  span {
    display: block;
    background-color: #000;
    width: 2rem;
    height: 2px;
    border-radius: 9px;
    transition: all .2s ease-in-out;
  }

  &:hover > span {
    background-color: #ff0000;
  }

  &.open  {
    span:first-of-type {
      transform: rotate(45deg);
      transform-origin: top left;
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:last-of-type {
      transform: rotate(-45deg);
      transform-origin: bottom left;
    }
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
    margin: 20px 0px;
    color: #000;
  }

  .content__newsletter {
    width: 100%;
    position: absolute;
    bottom: 2.5rem;

    .newsletter__signup {
      display: grid;
      grid-template-columns: 70% 1fr;
      gap: .8rem;
      margin-top: 10px;

      input {
        border: 2px solid #000;
        padding: .4rem .5rem;
        font-family: "source";
      }
    }
  }
}
</style>