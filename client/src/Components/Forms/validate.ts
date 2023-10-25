import { ILogin } from "../../Interfaces/Auth.interfaces";
import { IRegisterUser } from "../../Interfaces/Users.interfaces";

export interface IErrorRegister {
  email?: string;
  password?: string;
}

const passwordRegex: RegExp =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const authLoginValidate = (body: ILogin) => {
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
export interface IErrorRegisterBody {
  email?: string;
  password?: string;
  confirmPassword?: string;
}
export const registerValidate = (body: IRegisterUser) => {
  const errors: IErrorRegisterBody = {};
  if (!emailRegex.test(body.email)) {
    errors.email = "Ingrese un E-mail válido";
  }
  if (body.password !== body.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  if (/(?=.*[A-Z])/.test(body.password) && !/(?=.*\d)/.test(body.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  if (/(?=.*\d)/.test(body.password) && !/(?=.*[A-Z])/.test(body.password)) {
    errors.password = "La contraseña debe contener al menos una mayúsculas";
  }

  return errors;
};
