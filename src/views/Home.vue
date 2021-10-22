<template>
  <div class="container">
    <Navbar />
    <div class="home">
      <div class="home__content">
        <h1>
          Hello <span>{{ name }}</span
          >!
        </h1>
        <h3>Welcome to Yasu 👋</h3>
      </div>
      <div class="home__tabs">
        <div class="home__dashboard">
          <h2>DASHBOARD</h2>
          <div class="home__dashboard--appointments">
            <h2>
              Upcoming <br />
              Appointments
            </h2>
            <div>
              <p>Dr. Rajeev Prasad</p>
              <p>Dentist</p>
              <p>Date: 29th Oct, 2021</p>
            </div>
          </div>
          <div class="home__dashboard--tabs">
            <router-link :to="{ name: 'MedicalHistory' }">
              <div class="tab">
                <fa :icon="['fas', 'book-medical']" />
                <p>Medical History</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'MedicalAppointments' }">
              <div class="tab">
                <fa :icon="['fas', 'briefcase-medical']" />
                <p>Medical Appointments</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'Medications' }">
              <div class="tab">
                <fa :icon="['fas', 'prescription-bottle-alt']" />
                <p>Medications</p>
              </div>
            </router-link>
            <router-link to="#">
              <div class="tab">
                <fa :icon="['fas', 'history']" />
                <p>Card History</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="qr-code">
          <div class="qr-part"></div>
          <h2>{{ name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { supabase } from '@/supabase/config.js'
import { onMounted, ref } from 'vue'

export default {
  name: 'Home',
  components: { Navbar },
  setup() {
    const name = ref('')

    onMounted(async () => {
      const user = supabase.auth.user()

      const { data } = await supabase.from('information').select('*')

      const myUser = data.filter((data) => {
        return data.id === user.id
      })

      name.value = myUser[0].full_name
    })

    return { name }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/_variables.scss' as var;
@use '../assets/scss/_breakpoints.scss' as md;

.container {
  display: flex;
  gap: 1.5rem;

  @include md.breakpoint(medium) {
    gap: 2.5rem;
  }

  .home {
    width: 100%;
    padding: 2.5rem 0.625rem 2.5rem 0;

    @include md.breakpoint(medium) {
      padding: 2.5rem 1.625rem 2.5rem 0;
    }

    &__content {
      h1 {
        font-size: 35px;

        @include md.breakpoint(medium) {
          font-size: 45px;
        }
      }

      h3 {
        font-weight: 400;
        font-size: 20px;

        @include md.breakpoint(medium) {
          font-size: 25px;
        }
      }
    }

    &__tabs {
      margin-top: 40px;

      @include md.breakpoint(large) {
        display: flex;
        gap: 50px;
        align-items: flex-start;
      }
    }

    &__dashboard {
      background-color: var.$gray;
      border-radius: 10px;
      padding: 28px 17px;

      @include md.breakpoint(large) {
        flex: 1;
      }

      &--appointments {
        background-color: var.$purple;
        color: var.$white;
        border-radius: 10px;
        padding: 10px;
        margin-top: 15px;

        > div {
          margin-top: 10px;
        }
      }

      &--tabs {
        @include md.breakpoint(medium) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px;
        }

        a {
          background-color: var.$white;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;

          .tab {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;

            p {
              font-weight: 700;
            }
          }
        }
      }
    }

    .qr-code {
      background: var.$linear;
      padding: 40px 10px;
      border-radius: 10px;
      margin-top: 20px;

      @include md.breakpoint(large) {
        margin-top: 0;
        display: flex;
        flex: 1;
        padding: 40px;
        justify-content: space-between;
        align-items: center;
      }

      .qr-part {
        background-color: var.$gray;
        width: 100%;
        height: 100px;

        @include md.breakpoint(large) {
          flex: 1;
        }
      }

      h2 {
        color: var.$white;
        text-align: center;
        margin-top: 15px;

        @include md.breakpoint(large) {
          flex: 1;
        }
      }
    }
  }
}
</style>
