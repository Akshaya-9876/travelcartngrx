import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { combineLatest, generate, map, tap, toArray } from 'rxjs';





@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

 @Input()
 rating:number=0;

 //currentRating :number=2;

  //currentRating :number=2;

  stars=[];

 buildRating(currentRating:number){
   const filled$ = generate({
     initialState: 0,
     condition(value:number) {return value < currentRating; },
     iterate(value:number) {return value+1;},
     resultSelector(value:number) {return value}
    })
    .pipe(
      tap(item=>console.log('after generate - filled: ',item)),
      map(index=>({index,filled:true})),
      tap(item=>console.log('after map filled: ',item)),
      toArray()
    );

    const unFilled$ = generate({
      initialState: currentRating,
      condition(value:number) {return value<5;},
      iterate(value:number) {return value+1;},
      resultSelector(value:number) {return value}
     })
     .pipe(
       tap(item=>console.log('after generate - ufilled: ',item)),
       map(index=>({index,filled:false})),
       tap(item=>console.log('after map ufilled: ',item)),
       toArray()
     );

      const combined$=[].concat();
      combineLatest([filled$,unFilled$]).pipe(
      //map(tap(item=>console.log('combine',item)))
      map((result: any[])=>result[0].concat(result[1])
      .subscribe((result: any)=>this.stars=result)));
      
        

  }

  changeRating(index:number) {
    this.rating=index + 1;
    this.buildRating(index + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

function combineitem(combineitem: any): void {
  throw new Error('Function not implemented.');
}
// function index(index: any) {
//   throw new Error('Function not implemented.');
// }

// function changeRating(index: (index: any) => void) {
//   throw new Error('Function not implemented.');
// }

// function combineitem(combineitem: any): void {
//   throw new Error('Function not implemented.');
// }

// function subscribe(arg0: (result: any) => any) {
//   throw new Error('Function not implemented.');
// }

