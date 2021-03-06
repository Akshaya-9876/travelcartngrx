import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { PackageListItemComponent } from './components/package-list-item/package-list-item.component';
import { PackageListingComponent } from './components/package-listing/package-listing.component';
import { PackageSummaryHeaderComponent } from './components/package-summary-header/package-summary-header.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { ReviewPopupComponent } from './components/review-popup/review-popup.component';
import { CoreModule } from '../core/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromPackageListing from './reducers/package-listing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PackageListingEffects } from './effects/package-listing.effects';
import * as fromPackageDetails from './reducers/package-details.reducer';
import { PackageDetailsEffects } from './effects/package-details.effects';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';

@NgModule({
  declarations: [
    CatalogComponent,
    PackageListItemComponent,
    PackageListingComponent,
    PackageSummaryHeaderComponent,
    ReviewItemComponent,
    ReviewPopupComponent,
    PackageDetailComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CoreModule,
    StoreModule.forFeature(fromPackageListing.packageListingFeatureKey, fromPackageListing.reducer),
    EffectsModule.forFeature([PackageListingEffects, PackageDetailsEffects]),
    StoreModule.forFeature(fromPackageDetails.packageDetailsFeatureKey, fromPackageDetails.reducer),
  ],
 })
export class CatalogModule { }
