import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EbaySignIn } from './SignIn/SignIn.component';
import { EbaydefaultLayout } from './defaultLayout/defaultLayout.component';
import { Ebayregister } from './register/register.component';
import { EbaybrandOutlet } from './brandOutlet/brandOutlet.component';
import { EbaydailyDeals } from './dailyDeals/dailyDeals.component';
import { EbayhelpAndContact } from './helpAndContact/helpAndContact.component';


const routes: Routes = [
  {path: "", component: EbaydefaultLayout},
  {path: "SignIn", component: EbaySignIn},
  {path: "register", component: Ebayregister},
  {path: "brandOutlet", component: EbaybrandOutlet},
  {path: "dailyDeals", component: EbaydailyDeals},
  {path: "helpAndContact", component: EbayhelpAndContact},
] 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
