import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EbayNavbar} from 'src/app/navigation/navbar.component';
import { AppComponent } from './app.component';
import {EbayFooter} from 'src/app/Footer/Footer.component';
import {EbayTopNavBar} from 'src/app/TopNavBar/TopNavBar.component';
import {EbayTopCard} from 'src/app/TopCard/TopCard.component';
import {EbayMiddleCarousel} from 'src/app/MiddleCarousel/MiddleCarousel.component';
import {EbayAd} from 'src/app/Ad/Ad.component';
import {EbayMiddleButtons} from 'src/app/MiddleButtons/MiddleButtons.component';
import { newcardComponent} from 'src/app/newcard/newcard.compoent';
import { EbaylowerCard} from 'src/app/lowerCard/lowerCard.component';
import { AppRoutingModule } from './app-routing.module';
import { EbaySignIn} from 'src/app/SignIn/SignIn.component';
import { EbaydefaultLayout } from './defaultLayout/defaultLayout.component';
import { Ebayregister } from './register/register.component';
import { EbaybrandOutlet } from './brandOutlet/brandOutlet.component';
import { EbaydailyDeals } from './dailyDeals/dailyDeals.component';
import { EbayhelpAndContact } from './helpAndContact/helpAndContact.component';


@NgModule({
  declarations: [
    AppComponent,
    EbayNavbar,
    EbayFooter,
    EbayTopNavBar,
    EbayTopCard,
    EbayMiddleCarousel,
    EbayAd,
    EbayMiddleButtons,
    newcardComponent,
    EbaylowerCard, 
    EbaySignIn,
    EbaydefaultLayout,
    Ebayregister,
    EbaybrandOutlet,
    EbaydailyDeals,
    EbayhelpAndContact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
