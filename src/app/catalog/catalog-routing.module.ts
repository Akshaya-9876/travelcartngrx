import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';
import { PackageListingComponent } from './components/package-listing/package-listing.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  {path: 'packages/list', component:PackageListingComponent},
  { path: 'packages/:id', component: PackageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
