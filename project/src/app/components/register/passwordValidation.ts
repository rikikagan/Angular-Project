import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const passwordRegEx = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/;

const passwordPatternValidator = (): ValidatorFn => {
    return (control: AbstractControl):ValidationErrors | null => {
        return control.value && !control.value.match(passwordRegEx)
            ? {
                password: true,
            }
            : null;
    };
};

export const passwordValidator = passwordPatternValidator();
