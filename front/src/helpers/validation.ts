import validator from "validator";

export const validateEmail = (e:string) => {
    let validation = ""
    if(!validator.isEmail(e)) validation = "Errror al ingresar el email";
     return validation;
    };

export const validatePassword = (p:string) => {
      let validation = ""
      if(!validator.isLength(p, {min:4, max:8})) validation = "Min 4, Max 8";
       return validation;
      };