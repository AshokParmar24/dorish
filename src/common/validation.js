
export const Validation = (key, value,validPassword) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const mobileNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  switch (key) {
    case "email": {
      if (!value) {
        return "please enter email";
      }
      if (!emailRegex.test(value)) {
        console.log("543", emailRegex.test(value));
        return "Invalid email";
      }
      break;
    }
    case "password": {
      if (!value) {
        return "please enter password";
      }
      if (passwordRegex.test(value)) {
        console.log("jhdfkgh", passwordRegex.test(value));
        return "Invalid password";
      }
      break;
    }
    case "confirmPassword": {
      if (!value) {
        return "please enter confirmPassword";
      }
      if (passwordRegex.test(value)) {
        console.log("jhdfkgh", passwordRegex.test(value));
        return "Invalid confirmPassword";
      }
      if(value!==validPassword){
        return "match password";
      }
      break;
    }
    case "name": {
      if (value.length < 3) {
        return "please enter name";
      }
      break;
    }
    case "phoneNumber": {
      if (typeof value !== "number" && value.length !== 10) {
        return "please enter phoneNumber";
      }
      break;
    }
    default: {
      return "";
    }
  }
};
