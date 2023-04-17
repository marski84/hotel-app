import { FormControl } from '@angular/forms';
export interface ItargetAdServicesForm {
  google: FormControl<boolean>;
  bing: FormControl<boolean>;
  amazon: FormControl<boolean>;
  facebook: FormControl<boolean>;
  booking: FormControl<boolean>;
}
