export default {
  methods: {
    async checkForm(formData) {
      const dataLeght = Object.keys(formData).length;
      const testEmail = await this.isValidEmail(formData);

      if (dataLeght >= 3 && testEmail === true) {
        this.formError = false;
        this.$emit('handleSuccess', formData);
      } else {
        this.formError = true;
      }
    },
    isValidEmail(data) {
      const { email } = data;
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailRegex.test(email) && email) {
        return true;
      }
      return false;
    },
  },
};
