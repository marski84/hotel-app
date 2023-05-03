import { Pipe, PipeTransform } from '@angular/core';
import { ItargetAdServices } from '../ad-forms/models/ItargetAdServices.interface';

@Pipe({
  name: 'viewSelectedAds',
  standalone: true,
})
export class ViewSelectedAdsPipe implements PipeTransform {
  transform(value: ItargetAdServices): string[] {
    console.log(value);

    if (value) {
      const providers = Object.keys(value).filter((key) => value[key] === true);

      return providers;
    }

    return [''];
  }
}
