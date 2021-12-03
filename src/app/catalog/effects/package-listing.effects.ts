import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as PackageListingActions from '../actions/package-listing.actions';
import { CatalogService } from '../services/catalog.service';



@Injectable()
export class PackageListingEffects {

  loadPackageListings$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PackageListingActions.loadPackageListings),
      concatMap(() =>{
          return this.catalogService.fetchAllPackages()
          .pipe(
            map(packages => PackageListingActions.loadPackageListingsSuccess({ packages })),
            catchError(error => of(PackageListingActions.loadPackageListingsFailure({ error }))))
        }
      )
    );
  });



  constructor(
    private actions$: Actions,
    private catalogService:CatalogService
    ) {}

}
