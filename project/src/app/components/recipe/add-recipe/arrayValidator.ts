import { AbstractControl, ValidatorFn } from '@angular/forms';

export function arrayMinLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const values = control.value || [];
    return values.length >= minLength ? null : { arrayMinLength: true };
  };
}