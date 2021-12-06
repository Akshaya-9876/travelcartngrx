
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
  
})
export class ImageUrlPipe implements PipeTransform {

  

  transform(value?: string, ...args: unknown[]): unknown {
    return '/assets/asset/img/location/'+value+'.png';
    
  }
  // value!:string;
  // return 'assets/img/location/'+value;
  
}


