import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';
import { PackageListingComponent } from './components/package-listing/package-listing.component';
import { PackageListItemComponent } from './components/package-list-item/package-list-item.component';
const routes: Routes = [
{ 
  path: '', 
  component: CatalogComponent 
},
{
  path:'packages/list',
  component:PackageListingComponent
},
{
   path:'packages/:id',
  // path:'packages/detail',
  component:PackageDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
