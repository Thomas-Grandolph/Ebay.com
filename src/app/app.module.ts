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
import { newcardComponent} from 'src/app/newcard/newcard.component';
import { EbaylowerCard} from 'src/app/lowerCard/lowerCard.component';
import { AppRoutingModule } from './app-routing.module';
import { EbaySignIn} from 'src/app/SignIn/SignIn.component';
import { EbaydefaultLayout } from './defaultLayout/defaultLayout.component';
import { Ebayregister } from './register/register.component';
import { EbaybrandOutlet } from './brandOutlet/brandOutlet.component';
import { EbaydailyDeals } from './dailyDeals/dailyDeals.component';
import { EbayhelpAndContact } from './helpAndContact/helpAndContact.component';
import { SignInLayoutComponent } from './sign-in-layout/sign-in-layout.component';
import { SignInButtonsComponent } from './sign-in-buttons/sign-in-buttons.component';
import { newButtonComponent } from './newButton/newButton.component';
import { SignInBottomComponent } from './sign-in-bottom/sign-in-bottom.component';
import { EbaySignInTop } from './SignInTop/SIgnInTop.component';
import { RegisterTopComponent } from './register-top/register-top.component';
import { RegisterBottomComponent } from './register-bottom/register-bottom.component';
import { RegisterLeftComponent } from './register-left/register-left.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http'
import { RegisterLayoutComponent } from './registerLayout/registerLayout.component';
import { AuthComponent } from './auth/auth.component';

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
    EbayhelpAndContact,
    SignInLayoutComponent,
    SignInButtonsComponent,
    newButtonComponent,
    SignInBottomComponent,
    EbaySignInTop,
    RegisterTopComponent,
    RegisterBottomComponent,
    RegisterLeftComponent,
    UserInfoComponent,
    RegisterLayoutComponent,
    AuthComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
