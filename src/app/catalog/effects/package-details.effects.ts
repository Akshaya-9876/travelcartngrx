import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as PackageDetailsActions from '../actions/package-details.actions';
import { CatalogService } from '../services/catalog.service';
import { ReviewService } from '../services/review.service';



@Injectable()
export class PackageDetailsEffects {

  loadPackageDetails$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PackageDetailsActions.loadPackageDetails),
      concatMap((payload:{packageId:string}) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.catalogService.fetchPackageDetail(payload.packageId)
        .pipe(
          map(pkg => PackageDetailsActions.loadPackageDetailsSuccess({ package:pkg })),
          catchError(error => of(PackageDetailsActions.loadPackageDetailsFailure({ error }))))
      )
    );
  });


  loadPackageReviews$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PackageDetailsActions.loadPackageReviews),
      concatMap((payload:{packageId:string}) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.reviewService.fetchReviews(payload.packageId)
        .pipe(
          map(reviews => PackageDetailsActions.loadPackageReviewsSuccess({ reviews})),
          catchError(error => of(PackageDetailsActions.loadPackageReviewsFailure({ error }))))
      )
    );
  });
  constructor(
    private catalogService:CatalogService,
    private reviewService:ReviewService,
    private actions$: Actions) {}

}
