import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
  
})
export class ImageUrlPipe implements PipeTransform {

  

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;

    
  }
  // value!:string;
  // return 'assets/img/location/'+value;
  
}
