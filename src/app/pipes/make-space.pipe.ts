import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeSpace'
})
export class MakeSpacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value != null) {
      return value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    }
    return value;
  }

}
