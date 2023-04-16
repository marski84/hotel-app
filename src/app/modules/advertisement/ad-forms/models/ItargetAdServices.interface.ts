import { FormControl } from '@angular/forms';
export interface ItargetAdServices {
  google: FormControl<boolean>;
  bing: FormControl<boolean>;
  amazon: FormControl<boolean>;
  facebook: FormControl<boolean>;
  booking: FormControl<boolean>;
  stepNumber?: any;
}
