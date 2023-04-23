import { Pipe, PipeTransform } from '@angular/core';
import { ItargetAdServices } from '../ad-forms/models/ItargetAdServices.interface';

@Pipe({
  name: 'viewSelectedAds',
  standalone: true,
})
export class ViewSelectedAdsPipe implements PipeTransform {
  transform(value: {
    stepNumber: string;
    providers: ItargetAdServices;
  }): string[] {
    if (value.providers) {
      const providers = Object.keys(value.providers).filter(
        (key) => value.providers[key] === true
      );

      return providers;
    }

    return [''];
  }
}
