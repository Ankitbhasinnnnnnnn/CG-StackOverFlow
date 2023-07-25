import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis',
})
export class ElipsispipePipe implements PipeTransform {
  transform(val: any, args: any) {
    if (args === undefined) {
      return val;
    }

    if (val.length > args) {
      return val.substring(0, args) + '...';
    } else {
      return val;
    }
  }
}
