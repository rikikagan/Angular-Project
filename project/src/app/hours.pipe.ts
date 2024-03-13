import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours',
  standalone: true
})
export class HoursPipe implements PipeTransform {

  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let result = '';
    if (hours > 0) {
      result += `${hours} שעות`;
    }
    if (remainingMinutes > 0) {
      if(hours > 0) {
        result += ` ו-`;
      }
      result += `${remainingMinutes} דקות`;
    }
    return result;
  }
}
