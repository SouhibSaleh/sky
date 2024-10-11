import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Highlight',
  standalone: true
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: string, searchTerm: string): unknown {
    if (!searchTerm) {
      return value;
    }
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return value.replace(regex, '<mark>$1</mark>');
  }

}
