import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "@/interfaces";

export function validateLoginForm(values: ILoginProps) {
  const errors: ILoginErrors = {};

  if (!values.email) {
    errors.email = "El email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es correcto";
  }

  if (!values.password) {
    errors.password = "Password es requerido";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
    errors.password = "La contraseña no es correcta";
  }

  return errors;
}

export function validateRegisterForm(values: IRegisterProps) {
  const errors: IRegisterErrors = {};

   if (!values.email) {errors.email = "El email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es correcto";
  }

  if (!values.password) {errors.password = "La contraseña es requerida";
  }

  if (!values.address) {errors.address = "La dirección es requerida";
  }

  if (!values.phone) {errors.phone = "El teléfono es requerido";
  }

  if (!values.name) {errors.name = "El nombre es requerido";
  }

  return errors;
}