<template>
  <div class="navbar">
    <router-link class="navbar__logo" :to="{ name: 'Home' }">Yasu</router-link>
    <div class="navbar__links">
      <router-link :to="{ name: 'MedicalHistory' }">
        <fa :icon="['fas', 'book-medical']" />
      </router-link>
      <router-link :to="{ name: 'MedicalAppointments' }">
        <fa :icon="['fas', 'briefcase-medical']" />
      </router-link>
      <router-link :to="{ name: 'Medications' }">
        <fa :icon="['fas', 'prescription-bottle-alt']" />
      </router-link>
      <router-link to="#">
        <fa :icon="['fas', 'history']" />
      </router-link>
    </div>
    <div class="navbar__profile" @click="logoutUser">
      <fa :icon="['fas', 'sign-out-alt']" />
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase/config.js'
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()

    const logoutUser = async () => {
      const { error } = await supabase.auth.signOut()
      if (!error) {
        router.push({ name: 'Login' })
      }
    }

    return { logoutUser }
  },
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
    font-weight: 700;
    font-size: 22px;
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
    cursor: pointer;
  }
}
</style>