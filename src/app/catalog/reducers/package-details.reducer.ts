import { Action, createReducer, on } from '@ngrx/store';
import * as PackageDetailsActions from '../actions/package-details.actions';
//import { loadPackageListingsSuccess } from '../actions/package-listing.actions';
import { Package } from '../models/package';
import { Review } from '../models/review';

export const packageDetailsFeatureKey = 'packageDetails';

export interface PackageDetailsState {
  isLoadingPackage:boolean;
  isLoadingReviews:boolean;
  package:Package |null;
  reviews:Review[];
}

export const initialState: PackageDetailsState = {
  isLoadingPackage:false,
  isLoadingReviews:false,
  package: null,
  reviews: []
};

const loadPackageDetails = (state:PackageDetailsState)=>{
  return{...state,isLoadingPackage:true};
};

const loadPackageDetailsSuccess = (state:PackageDetailsState, payload: {package:Package|null})=>{
  return{...state,package:null, isLoadingPackage:false};
};

const loadPackageDetailsFailure = (state:PackageDetailsState)=>{
  return{...state,package:null, isLoadingPackage:false};
};

const loadPackageReviews = (state:PackageDetailsState)=>{
  return{...state,isLoadingPackage:true};
};

const loadPackageReviewsSuccess = (state:PackageDetailsState, payload: {reviews:Review[]})=>{
  return{...state,reviews:payload.reviews, isLoadingPackage:false};
};

const loadPackageReviewsFailure = (state:PackageDetailsState)=>{
  return{...state,package:null, isLoadingPackage:false};
};

export const reducer = createReducer(
  initialState,

  on(PackageDetailsActions.loadPackageDetails, loadPackageDetails),
  on(PackageDetailsActions.loadPackageDetailsSuccess, loadPackageDetailsSuccess),
  on(PackageDetailsActions.loadPackageDetailsFailure, loadPackageDetailsFailure),


  on(PackageDetailsActions.loadPackageReviews, loadPackageReviews),
  on(PackageDetailsActions.loadPackageReviewsSuccess, loadPackageReviewsSuccess),
  on(PackageDetailsActions.loadPackageReviewsFailure, loadPackageReviewsFailure),


  


  
);
