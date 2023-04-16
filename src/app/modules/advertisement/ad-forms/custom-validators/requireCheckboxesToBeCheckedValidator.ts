import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  UntypedFormGroup,
} from '@angular/forms';

export function requireCheckboxesToBeCheckedValidator(): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const formGroup = ctrl as UntypedFormGroup;

    const controlsArray = Object.values(formGroup.controls);

    return controlsArray.some((fc) => fc.value === true)
      ? null
      : { requireOneCheckboxToBeChecked: true };
  };
}
