export default {
  data() {
    return {
      setEmailError: false,
      setInputfieldError: false,
      emailDone: false,
    };
  },
  methods: {
    checkInputValue() {
      const emailValue = document.getElementById('email').value;

      if (emailValue !== '' && this.isValidEmail(emailValue)) {
        this.emailDone = true;
        this.inputValue = emailValue;
      } else if (this.isValidEmail(emailValue) === false) {
        this.emailDone = false;
        this.setInputfieldError = true;
        return false;
      }
      return true;
    },
    async checkForm(formData) {
      console.log('------------------------------------');
      console.log(formData);
      console.log('------------------------------------');
    },
    isValidEmail(email) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(email) && email) {
        return true;
      }
      return false;
    },
  },
};
