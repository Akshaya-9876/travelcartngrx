import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { PackageReviewSummary } from '../models/package-review-summary';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews:Review[]=[];
  reviewSummaries:PackageReviewSummary[]=[];
  rating=2;
  
  constructor() { }

  postReview(review:Review){
    this.reviews.push(review);
    const reviewForPackage = this.reviews.filter(item=>item.packageId===review.packageId);
    const totalRating=reviewForPackage
    .map(review=>review.rating)
    .reduce((acc,rating)=> acc + rating);

  const packageId=Review.packageId;
    const reviewCount=reviewForPackage.length;
    //const averageRating=totalRating/reviewCount;
    const averageRating=4;
    this.reviewSummaries=this.reviewSummaries
    .filter(summary=>summary.packageId !==packageId);
    this.reviewSummaries.push({packageId,reviewCount,averageRating});
  }
  fetchReviewSummary(packageId:string):Observable<PackageReviewSummary>{
    return from(this.reviewSummaries)
    .pipe(filter(item=>item.packageId === packageId));
  }
  fetchReviews(packageId:string):Observable<Review[]>{
    return of(this.reviews)
    .pipe(map(reviews=>reviews.filter(item=>item.packageId === packageId)));
  }
}

