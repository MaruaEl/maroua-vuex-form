<template>
  <div>
    <div
      v-if="type === 'text'"
      :class="`input input__${type} input__${type}--${borderColor}`">
        <input
          id="text_input"
          ref="field"
          type="text"
          :placeholder="placeholder"
          v-model="text"
          name="text_input"
          autocomplete="off"
          value
          @keyup="$event.keyCode !== 13 && returnInputData(text)">

        <transition name="error-fade">
          <p
            v-if="error"
            class="error">
            <span class="error__label">{{ errorText }}</span>
          </p>
        </transition>
    </div>

    <div
      v-if="type === 'email'"
      :class="`input input__${type} input__${type}--${borderColor}`">
      <input
        type="email"
        ref="email"
        id="email"
        :placeholder="placeholder"
        v-model="email"
        name="email"
        @keyup="$event.keyCode !== 13 && returnInputData(email)">

      <transition name="error-fade">
        <p
          v-if="error"
          class="error">
          <span class="error__label">Incorrect {{ type }}</span>
        </p>
      </transition>
    </div>

    <div
      v-if="type === 'text-area'"
      :class="`input input__${type} input__${type}--${borderColor}`">

      <label for="story">{{label}}</label>

      <textarea
        v-model="textArea"
        id="text-area"
        name="text-area"
        rows="5" cols="33">
      </textarea>

    </div>

  </div>
</template>
<script>

export default {
  name: 'input-component',
  props: {
    type: {
      default: 'password',
      required: false,
    },
    placeholder: {
      type: String,
      default: 'Type here...',
      required: false,
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    border: {
      type: String,
      default: 'grey',
      required: false,
    },
    error: {
      type: Boolean,
      default: false,
      required: false,
    },
    errorText: {
      type: String,
      default: 'This field is required',
      required: false,
    },
  },
  data() {
    return {
      email: '',
      text: '',
      textArea: '',
    };
  },
  computed: {
    borderColor() {
      return this.error ? 'red' : 'grey';
    },
  },
  mounted() {
    const refs = this.$refs;
    return refs.email ? refs.email.focus() : refs.field.focus();
  },
  methods: {
    returnInputData(value) {
      this.$emit('returnInputData', value);
    },
    toggleBorder(color) {
      this.borderColor = color;
    },
  },
};
</script>

<style lang="scss" scoped>
// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,
// input:-webkit-autofill:active {
//     -webkit-box-shadow: 0 0 0 30px white inset;
//     box-shadow: 0 0 0 30px white inset;

// }
// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,
// input:-webkit-autofill:active {
//   -webkit-box-shadow: 0 0 0 30px white inset;
//   box-shadow: 0 0 0 30px white inset;
// }
input {
  border: none;
  background-color: transparent;
  font-size: calcRem(14);
  font-weight: 300;
  // color: $color-grey;
  width: 100%;
  overflow: auto;
  height: inherit;

  &:focus {
    outline: 0;
    box-shadow: none;
  }
  &:not(output):-moz-ui-invalid:-moz-focusring {
    box-shadow: none;
  }
}

.input {
  background-color: $color-white;
  border-radius: calcRem(2);
  box-shadow: 0 0 0 2px hsla(0, 0%, 7%, 0.2),
      0 16px 18px -16px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: none;
  padding: calcRem(8);
  line-height: calcRem(22);
  color: $color-grey;
  text-align: left;
  overflow: auto;
  height: 100%;
  transition: all 0.3s ease-in-out;
  &__email,
  &__text {

    &--grey {
      border: calcRem(1) solid $color-light-grey;
    }

    &--red {
      border: calcRem(1) solid $color-pink;
    }

    &:focus-within {
      box-shadow: 0 0 0 1px hsla(0, 0%, 7%, 0.2),
      0 16px 18px -16px rgba(0, 0, 0, 0.2);
    }
  }
}
.error{
    margin-top: 0.7rem;
    color: $color-pink;
}
</style>
