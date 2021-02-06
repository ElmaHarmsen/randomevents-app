<template>
  <div>
    <div class="layout__header">
      <h1>Random <img class="header__logo" src="~/assets/images/d10.svg" /> Events</h1>
    </div>
    <Nuxt />
    <div class="layout__footer">
      <small>Random Events 2021 - view creator at <a href="https://www.elmaharmsen.nl/">elmaharmsen.nl</a></small>
    </div>
  </div>
</template>

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
