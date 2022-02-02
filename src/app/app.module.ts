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
    newcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
