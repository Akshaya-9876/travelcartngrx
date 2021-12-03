import { Component, Input, OnInit ,OnChanges} from '@angular/core';
import { Package } from '../../models/package';
import { HttpClient } from '@angular/common/http';
import { CatalogService } from '../../services/catalog.service';
import * as PackageListingActions from '../../actions/package-listing.actions';
import { Store } from '@ngrx/store';
import { PackageListingState } from '../../reducers/package-listing.reducer';
import { selectHighlightedPackages, selectHighlightedPackagesCount, selectPackageListing, selectPackageListingState, selectPackageListingSummaries, selectTotalPackageCount } from '../../selectors/package-listing.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageDetailComponent } from '../package-detail/package-detail.component';
import { PackageListItemComponent } from '../package-list-item/package-list-item.component';
@Component({
  selector: 'app-package-listing',
  templateUrl: './package-listing.component.html',
  styleUrls: ['./package-listing.component.scss']
})

// @Input(){
//   package!: Package[];
// } 

export class PackageListingComponent implements OnInit {

  
   packages: Package[]=[];
   totalCount:number=0;
   summaries!:any[];
   highlightedCount: number=0;
   package!:Package;
   

  constructor(
    private store:Store<PackageListingState>, 
    private catalogService:CatalogService,
    private router:Router,
    private route:ActivatedRoute) 
      
    
     { }

  ngOnInit(): void {
    // this.catalogService.fetchAllPackages()
    // .subscribe((res)=>{
    //   this.packages=res;
    //   console.log(this.packages);
    // })

    // this.catalogService.fetchAllPackages()
    // .subscribe((packages)=>{
    //   this.packages=packages;
    //   console.log(this.packages);
    // })


    this.store
    .select(selectHighlightedPackages)
    .subscribe(packages=>this.packages=packages);


    // this.store
    //   .select(selectPackageListing)
    //   .subscribe(packages=>this.packages=packages);


    this.store
      .select(selectTotalPackageCount)
      .subscribe(totalCount=>this.totalCount=totalCount);

      this.store
      .select(selectPackageListingSummaries)
      .subscribe(summaries=>this.summaries=summaries);

      this.store
      .select(selectHighlightedPackagesCount)
      .subscribe(highlightedCount=>this.highlightedCount=highlightedCount);

      


    this.store.dispatch(PackageListingActions.loadPackageListings());

    
  }

toggleSelection(summary:any){
    this.store.dispatch(PackageListingActions.toggleLocationSelection({location:summary.location}));
}

onPackageSelected() {
  // this.router.navigate(['..',this.package.id],{relativeTo:this.route});
  this.router.navigate(['..',this.package.id]);
}

}
