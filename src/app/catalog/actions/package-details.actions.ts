import { createAction, props } from '@ngrx/store';
import { Package } from '../models/package';
import { Review } from '../models/review';

export const loadPackageDetails = createAction(
  '[PackageDetails] Load Package Details',
  props<{packageId:string}>()
);

export const loadPackageDetailsSuccess = createAction(
  '[PackageDetails] Load Package Details Success',
   props<{ package: Package|null }>()
  // props<{ package: Package}>()
);

export const loadPackageDetailsFailure = createAction(
  '[PackageDetails] Load Package Details Failure',
  props<{ error: any }>()
);


export const loadPackageReviews = createAction(
  '[PackageDetails] Load Package Reviews',
  props<{packageId:string}>()
);

export const loadPackageReviewsSuccess = createAction(
  '[PackageDetails] Load Package Reviews Success',
  props<{ reviews: Review[] }>()
);

export const loadPackageReviewsFailure = createAction(
  '[PackageDetails] Load Package Reviews Failure',
  props<{ error: any }>()
);
