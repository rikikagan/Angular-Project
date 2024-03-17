import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const urlRegEx = /^((https?|ftp):\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;

const urlPatternValidator = (): ValidatorFn => {
    return (control: AbstractControl):ValidationErrors | null => {
        return control.value && !control.value.match(urlRegEx)
            ? {
                url: true,
            }
            : null;
    };
};

export const urlValidator = urlPatternValidator();