import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function headOrganizationSelectIsValid(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = control.value !== 0;

    return isValid ? null : { prohibitedValue: { value: control.value } };
  };
}

export function digitsCountIsValid(digit: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = new RegExp(`\\b\\d{${digit}}\\b`).test(control.value);

    return isValid ? null : { prohibitedValue: { value: control.value } };
  };
}