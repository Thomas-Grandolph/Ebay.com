import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EbayNavbar} from 'src/app/navigation/navbar.component';
import { AppComponent } from './app.component';
import {EbayFooter} from 'src/app/Footer/Footer.component';
import {EbayTopNavBar} from 'src/app/TopNavBar/TopNavBar.component';

@NgModule({
  declarations: [
    AppComponent,
    EbayNavbar,
    EbayFooter,
    EbayTopNavBar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
