import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinStrings',
})
export class JoinStringsPipe implements PipeTransform {
  transform(input: any, character: string = ''): any {
    if (!Array.isArray(input)) {
      return input;
    }

    return input.join(character);
  }
}
