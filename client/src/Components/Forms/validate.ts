import { IRegisterUser } from "../../Interfaces/Users.interfaces";

export interface IErrorRegister {
  email?: string;
  password?: string;
}

const passwordRegex: RegExp =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registerValidate = (body: IRegisterUser) => {
  const errors: IErrorRegister = {};
  if (!emailRegex.test(body.email)) {
    errors.email = "Email inválido";
  }
  if (!passwordRegex.test(body.password)) {
    errors.password =
      "La contraseña debe tener mínimamente un número y una mayúscula";
  }
  return errors;
};
export interface IErrorRecoveryPassword {
  password?: string;
  confirmPassword?: string;
}
export const recoveryPasswordValidate = (body: {
  password: string;
  confirmPassword: string;
}) => {
  const errors: IErrorRecoveryPassword = {};
  if (!passwordRegex.test(body.password)) {
    errors.password = "Falta una mayúscula o un número mínimamente";
  }
  if (body.password !== body.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
};
