<template>
  <div class="profile">
    <div class="profile__basics">
      <h1>Basic Information</h1>
      <div class="profile__info">
        <div class="form-container">
          <div class="fullName">
            <label for="fullName">Full Name:</label><br />
            <input
              type="text"
              v-model="fullName"
              id="fullName"
              placeholder="John Doe"
              disabled
            />
          </div>

          <div class="age">
            <label for="age">Age:</label><br />
            <input
              type="number"
              v-model="age"
              id="age"
              placeholder="19"
              disabled
            />
          </div>

          <div class="gender">
            <label for="gender">Gender:</label><br />
            <input
              type="text"
              v-model="gender"
              id="gender"
              placeholder="Female"
              disabled
            />
          </div>

          <div class="bloodGroup">
            <label for="bloodGroup">Blood Group:</label><br />
            <input
              type="text"
              v-model="bloodGroup"
              id="bloodGroup"
              placeholder="B Positive"
              disabled
            />
          </div>

          <div class="allergies">
            <label for="allergies">Allergies:</label><br />
            <input
              type="text"
              v-model="allergies"
              id="allergies"
              placeholder="Peanuts"
              disabled
            />
          </div>

          <div class="disease">
            <label for="disease">Disease:</label><br />
            <input
              type="text"
              id="disease"
              placeholder="Blood Pressure, Sugar"
              v-model="diseases"
              disabled
            />
          </div>

          <div class="other">
            <label for="other">Others:</label><br />
            <textarea
              cols="30"
              id="other"
              rows="10"
              placeholder="Any other things...Write here"
              v-model="others"
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <Appointments />
    <Medications />
  </div>
</template>

<script>
import getMedicalHistory from '@/composables/getMedicalHistory.js'
import Appointments from '../components/Appointments'
import Medications from '../components/Medications'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase/config.js'

export default {
  name: 'UserProfile',
  components: { Appointments, Medications },
  setup() {
    const message = ref('')
    const isError = ref(false)
    const router = useRouter()
    const user = supabase.auth.user()

    const { fullName, age, gender, bloodGroup, allergies, diseases, others } =
      getMedicalHistory()

    const handleSubmit = async () => {
      try {
        if (
          fullName.value === '' ||
          age.value === '' ||
          gender.value === '' ||
          bloodGroup.value === '' ||
          allergies.value === '' ||
          diseases.value === '' ||
          others.value === ''
        ) {
          message.value = 'Please fill the form correctly'
          isError.value = true
        } else {
          const { data, error } = await supabase
            .from('information')
            .update([
              {
                id: user.id,
                full_name: fullName.value.trim(),
                age: age.value,
                gender: gender.value.trim(),
                blood_group: bloodGroup.value.trim(),
                allergies: allergies.value.trim(),
                diseases: diseases.value.trim(),
                others: others.value.trim(),
              },
            ])
            .match({ id: user.id })
          if (!error && data.length > 0) {
            router.push({ name: 'MedicalHistory' })
          } else {
            message.value = error.message
            isError.value = true
          }
        }
      } catch (err) {
        console.log(err.message)
        message.value = 'Sorry, Something went wrong'
        isError.value = true
      }
    }

    return {
      fullName,
      age,
      gender,
      bloodGroup,
      allergies,
      diseases,
      others,
      handleSubmit,
      message,
      isError,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/_breakpoints.scss' as md;
@use '../assets/scss/_variables.scss' as var;

.profile {
  max-width: 60rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;

  &__basics {
    div {
      .form-container {
        margin-top: 2.1875rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3.125rem;

        input {
          width: 100%;

          &:disabled {
            background-color: #f8f3f3;
          }
        }

        .other {
          grid-column: 1 / 3;

          textarea {
            width: 100%;

            &:disabled {
              background-color: #f8f3f3;
            }
          }
        }
      }
    }
  }
}
</style>