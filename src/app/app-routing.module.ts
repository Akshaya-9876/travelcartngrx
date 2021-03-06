import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CoreModule } from './core/core.module';

const routes: Routes = [{ path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) }, { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
