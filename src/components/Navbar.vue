<template>
  <div class="navbar">
    <div class="navbar__logo">Logo</div>
    <div class="navbar__links">
      <fa :icon="['fas', 'book-medical']" />
      <fa :icon="['fas', 'briefcase-medical']" />
      <fa :icon="['fas', 'prescription-bottle-alt']" />
      <fa :icon="['fas', 'history']" />
    </div>
    <div class="navbar__profile">
      <fa :icon="['fas', 'sign-out-alt']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/_variables.scss' as var;
@use '../assets/scss/_breakpoints.scss' as md;

.navbar {
  background: var.$linear;
  padding: 2.5rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  @include md.breakpoint(medium) {
    padding: 2.5rem 1.625rem;
  }

  &__logo {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5625rem;
    gap: 1.875rem;
  }

  &__profile {
    font-size: 1.5625rem;
  }
}
</style>