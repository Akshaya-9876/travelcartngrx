import { createAction, props } from '@ngrx/store';

export const loadCartDetails = createAction(
  '[CartDetail] Load Cart Details'
);

export const loadCartDetailsSuccess = createAction(
  '[CartDetail] Load Cart Details Success',
  props<{ data: any }>()
);

export const loadCartDetailsFailure = createAction(
  '[CartDetail] Load Cart Details Failure',
  props<{ error: any }>()
);

export const addPackageToCart = createAction(
  '[CartDetail] Add Package To Cart'
);

export const addPackageToCartSuccess = createAction(
  '[CartDetail] Add Package To Cart Success',
  props<{ data: any }>()
);

export const addPackageToCartFailure = createAction(
  '[CartDetail]  Add Package To Cart Failure',
  props<{ error: any }>()
);
