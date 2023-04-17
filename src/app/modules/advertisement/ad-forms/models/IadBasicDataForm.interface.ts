import { FormControl, FormGroup } from '@angular/forms';
export interface IadBasicDataForm {
  adTitle: FormControl<string>;
  adDescription: FormControl<string>;

  campaignDuration: FormGroup<{
    start: FormControl<string>;
    end: FormControl<string>;
  }>;
}
