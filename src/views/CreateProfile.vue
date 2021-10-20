<template>
  <div class="profile">
    <div class="profile__basics">
      <h1>Basic Information</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-container">
          <div class="fullName">
            <label for="fullName">Full Name:</label><br />
            <input
              type="text"
              v-model="fullName"
              id="fullName"
              placeholder="John Doe"
            />
          </div>

          <div class="age">
            <label for="age">Age:</label><br />
            <input type="number" v-model="age" id="age" placeholder="19" />
          </div>

          <div class="gender">
            <label for="gender">Gender:</label><br />
            <input
              type="text"
              v-model="gender"
              id="gender"
              placeholder="Female"
            />
          </div>

          <div class="bloodGroup">
            <label for="bloodGroup">Blood Group:</label><br />
            <input
              type="text"
              v-model="bloodGroup"
              id="bloodGroup"
              placeholder="B Positive"
            />
          </div>

          <div class="allergies">
            <label for="allergies">Allergies:</label><br />
            <input
              type="text"
              v-model="allergies"
              id="allergies"
              placeholder="Peanuts"
            />
          </div>

          <div class="disease">
            <label for="disease">Disease:</label><br />
            <input
              type="text"
              id="disease"
              placeholder="Blood Pressure, Sugar"
              v-model="diseases"
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
            ></textarea>
          </div>
        </div>

        <!-- Submit -->
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CreateProfile',
  setup() {
    const fullName = ref('')
    const age = ref(0)
    const gender = ref('')
    const bloodGroup = ref('')
    const allergies = ref('')
    const diseases = ref('')
    const others = ref('')

    const handleSubmit = () => {
      console.log(
        fullName.value,
        age.value,
        gender.value,
        bloodGroup.value,
        allergies.value,
        diseases.value,
        others.value
      )
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
    }
  },
}
</script>

<style lang="scss" scoped>
.profile {
  max-width: 60rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;

  &__basics {
    form {
      .form-container {
        margin-top: 2.1875rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3.125rem;

        input {
          width: 100%;
        }

        .other {
          grid-column: 1 / 3;

          textarea {
            width: 100%;
          }
        }
      }

      .btn {
        text-align: right;
        margin-top: 1.25rem;
      }
    }
  }
}
</style>