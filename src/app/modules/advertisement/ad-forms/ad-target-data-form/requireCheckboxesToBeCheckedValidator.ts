import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

export function requireCheckboxesToBeCheckedValidator(): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const formGroup = ctrl as FormGroup;

    const controlsArray = Object.values(formGroup.controls);

    return controlsArray.some((fc) => fc.value === true)
      ? null
      : { requireOneCheckboxToBeChecked: true };
  };
}
