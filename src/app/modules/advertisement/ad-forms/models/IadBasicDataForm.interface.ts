import { FormControl, FormGroup } from '@angular/forms';
import { IadBasicData } from './IadBasicData.interface';

export interface IadBasicDataForm {
  adTitle: FormControl<string>;
  adDescription: FormControl<string>;

  campaignDuration: FormGroup<{
    start: FormControl<string>;
    end: FormControl<string>;
  }>;
}

type AdvForm = FormGroup<IadBasicDataForm & IadBasicData>;
// type SuperAdvForm = FormGroup<IadBasicDataForm & IadBasicData & trzeciStepForm>;
