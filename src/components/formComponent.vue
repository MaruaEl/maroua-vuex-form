<template>
  <div class="form">
    <form>
      <input-component
        :type="'text'"
      />
      <input-component
        :type="'text'"
      />
      <input-component
        :type="'email'"
      />
      <input-component
        :type="'text-area'"
      />

      <button-component />
    </form>
  </div>
</template>
// First name - Surname - E-mail address - Customer query - Submit button
<script>
import inputComponent from './global/inputComponent.vue';
import buttonComponent from './global/buttonComponent.vue';

export default {
  name: 'form-component',
  components: {
    inputComponent,
    buttonComponent,
  },
};
</script>
