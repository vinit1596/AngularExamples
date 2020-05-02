import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencysymbol'
})
export class CurrencysymbolPipe implements PipeTransform {

  transform(value: number): string {
    return "$ "+value;
  }

}
