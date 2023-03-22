import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^\+?\d{11}$/.test(control.value);
    return result ? null : {phone: {value: control.value}};
  }

  static addressValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^[a-zA-Zа-яА-Я\d\s\-\/]+$/.test(control.value);
    return result ? null : {address: {value: control.value}};
  }
}
