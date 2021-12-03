import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Package } from '../../models/package';
import {Router} from '@angular/router'

@Component({
  selector: 'app-package-list-item',
  templateUrl: './package-list-item.component.html',
  styleUrls: ['./package-list-item.component.scss']
})
export class PackageListItemComponent implements OnInit {
  @Input()
  package!: Package;
  
  rating=4;
  
  
  

  constructor(
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }


  onPackageSelected() {
    this.router.navigate(['..',this.package.id],{relativeTo:this.route});
    // this.router.navigate(['..',this.package.id]);
  }
}
