import { FormGroup } from '@angular/forms';
import { IadBasicDataForm } from './IadBasicDataForm.interface';
import { ItargetAdServicesForm } from './ItargetAdServicesForm.interface';

export interface IadvertisementForm {
  adBasicDataForm: FormGroup<IadBasicDataForm>;
  targetAdServicesForm: FormGroup<ItargetAdServicesForm>;
}
// basicAdData: FormGroup<IadBasicDataForm>;
// targetAdServices: FormGroup<ItargetAdServicesForm>;
