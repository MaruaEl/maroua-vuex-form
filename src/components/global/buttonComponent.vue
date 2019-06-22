<template>
  <button
    :href="href"
    :style="style"
    :disabled="disabled"
    :id="buttonId"
    @click="clickEvent"
    class="button"
  >
  {{ text }}
  </button>
</template>

<script>

export default {
  name: 'button-component',
  props: {
    text: {
      type: String,
			default: "Add",
			required: false
    },
    width: {
      type: String,
			default: "100%",
			required: false
    },
    fontSize: {
      type: String,
			default: "1rem",
			required: false
    },
    fontWeight: {
      type: String,
			default: "600",
			required: false
    },
    padding: {
      type: String,
			default: "1rem",
			required: false
		},
		margin: {
      type: String,
			default: "",
			required: false
		},
    href: {
			default: false,
			required: false
    },
    disabled: {
      type: Boolean,
			default: false,
			required: false
    },
    buttonId: {
      type: String,
			default: '',
			required: false
		},
		borderRadius: {
      type: String,
			default: '',
			required: false
		},
  },
  computed: {
    style() {
      return `
        width: ${this.width};
        padding: ${this.padding};
        margin: ${this.margin};
        border-radius: ${this.borderRadius};
        fontSize: ${this.fontSize};
        fontWeight: ${this.fontWeight};
      `;
    },
  },
  methods: {
    clickEvent(value) {
      this.$emit('clickEvent', value);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-align: center;
  cursor: pointer;
}
button {
  transition: all 0.38s ease-in-out;
  outline-style: none;
  cursor: pointer;

  &:hover {
    outline: none;
  }
}
.button {
  font-weight: 400;
  border-radius: calcRem(7);
  background-color: $color-purple;
  border-color: $color-purple;
  color: $color-white;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: darken($color-purple, 6%);
    transform: scale(1.02);
  }
  &:focus {
    outline: 0;
  }

  &__disabled {
    border-radius: calcRem(7);
    padding: calcRem(15);
    background-color: $color-light-grey;
    color: $color-grey;
    border: none;
  }
}
</style>
