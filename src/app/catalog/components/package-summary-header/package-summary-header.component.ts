import { Component, OnInit } from '@angular/core';
import { RatingComponent } from 'src/app/core/component/rating/rating.component';
import { Package } from '../../models/package';

@Component({
  selector: 'app-package-summary-header',
  templateUrl: './package-summary-header.component.html',
  styleUrls: ['./package-summary-header.component.scss']
})
export class PackageSummaryHeaderComponent implements OnInit {

  package!:Package;
  rating=3;
  constructor() { }

  ngOnInit(): void {
  }

}
