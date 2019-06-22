<template>
  <div class="form">
    <form
      id="summary-form"
      @submit="checkForm(formData)"
      method="post"
      class="form__container">
      <input-component
        @returnInputData="saveInput"
        :placeholder="'First Name'"
        :type="'text'"
      />
      <input-component
        @returnInputData="saveInput"
        :placeholder="'Surname'"
        :type="'text'"
      />
      <input-component
        @returnInputData="saveInput"
        :placeholder="'Email'"
        :type="'email'"
      />
      <input-component
        @returnInputData="saveInput"
        :label="'Customer query'"
        :type="'text-area'"
      />

      <button-component
        :margin="'1rem auto'"
        :width="'8rem'"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import inputComponent from './global/inputComponent.vue';
import buttonComponent from './global/buttonComponent.vue';
export default {
  name: 'form-component',
  components: {
    inputComponent,
    buttonComponent,
  },
  data() {
    return {
      formData: {
        firstName: '',
        surname: '',
        emails: '',
        customerQuery: '',
      },
    };
  },
  methods: {
    ...mapActions(['']),
    saveInput(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  &__container {
    display: flex;
    flex-direction: column;
  }
}
</style>
