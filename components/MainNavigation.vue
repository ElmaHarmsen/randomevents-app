<template>
  <div>
    <span class="rainbow"></span>
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
    <div class="navigation__content-lg">
      <NuxtLink to="/"><h1>Home</h1></NuxtLink>
      <NuxtLink to="/events"><h1>Random Events</h1></NuxtLink>
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
@import '@/assets/global.scss';

.rainbow {
  display: block;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgb(255,69,0);
  background: linear-gradient(90deg, rgba(255,69,0,1) 0%, rgba(255,158,0,1) 100%); 
}
.navigation__menu {
  width: 2rem;
  height: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: fixed;
  z-index: 2;

  @include screen-is(lg) {
    display: none;
  }

  span {
    display: block;
    background-color: #000;
    width: 2rem;
    height: 3px;
    border-radius: 10px;
    transition: all .2s ease-in-out;
  }

  &:hover > span {
    background-color: #ff4500;
  }

  &.open  {
    span:first-of-type {
      transform: rotate(43deg);
      transform-origin: top left;
      background-color: #ff4500;
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:last-of-type {
      transform: rotate(-43deg);
      transform-origin: bottom left;
      background-color: #ff4500;
    }
  }
}
.navigation__content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #080808;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @include screen-is(lg) {
    display: none;
  }

  .content__links h1 {
    margin: 20px 0px;
    color: #fff;
    text-transform: uppercase;
  }

  .content__newsletter {
    width: calc(100% - 2.4rem);
    position: absolute;
    bottom: 2.5rem;
    left: $space;
    text-transform: uppercase;
    color: #fff;

    .newsletter__signup {
      width: 100%;
      display: grid;
      grid-template-columns: 67% 1fr;
      gap: 10px;
      margin-top: 10px;

      input {
        border: 2px solid #fff;
        background-color: #080808;
        padding: .5rem .7rem;
        font-family: "source";
        color: #fff;
      }
      input::placeholder {
        color: #e0e0e0;
      }
    }
  }
}

.navigation__content-lg {
  display: none; 

  @include screen-is(lg) {
    background-color: #080808;
    color: #fff;
    position: fixed;
    z-index: 2;
    top: 4px;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 8% 1fr;
    padding: 0 1.6rem;
    text-align: left;

    h1 {
      padding: 1rem 0;
      text-transform: uppercase;
      font-size: 24px !important;
    }
    h1:active {
      outline: none;
    }
  }
}
</style>