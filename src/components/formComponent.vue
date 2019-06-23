<template>
  <div class="form">
    <form
      v-show="hideForm"
      id="summary-form"
      @submit.prevent="checkForm(formData)"
      method="post"
      class="form__container">
      <input-component
        @returnInputData="saveInput($event, 'firstName')"
        :placeholder="'First Name'"
        :type="'text'"
        :error="formError"
      />
      <input-component
        @returnInputData="saveInput($event, 'surname')"
        :placeholder="'Surname'"
        :type="'text'"
        :error="formError"
      />
      <input-component
        @returnInputData="saveInput($event, 'email')"
        :placeholder="'Email'"
        :type="'email'"
        :error="formError"
      />
      <input-component
        @returnInputData="saveInput($event, 'query')"
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
import inputComponent from './global/inputComponent.vue';
import buttonComponent from './global/buttonComponent.vue';
import formValidation from '../mixins/validations-methods/form-validations';

export default {
  name: 'form-component',
  mixins: [formValidation],
  components: {
    inputComponent,
    buttonComponent,
  },
  props: {
    hideForm: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {
      formData: {},
      formError: false,
    };
  },
  methods: {
    saveInput(value, field) {
      this.formError = false;
      this.formData[field] = value;
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
