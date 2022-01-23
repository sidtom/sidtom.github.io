import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DbrdSectionOneComponent } from './components/dashboard/dbrd-section-one/dbrd-section-one.component';
import { DbrdSectionTwoComponent } from './components/dashboard/dbrd-section-two/dbrd-section-two.component';
import { DbrdSectionThreeComponent } from './components/dashboard/dbrd-section-three/dbrd-section-three.component';
import { DbrdSectionFourComponent } from './components/dashboard/dbrd-section-four/dbrd-section-four.component';
import { DbrdSectionFiveComponent } from './components/dashboard/dbrd-section-five/dbrd-section-five.component';
import { DbrdSectionSixComponent } from './components/dashboard/dbrd-section-six/dbrd-section-six.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DbrdSectionOneComponent,
    DbrdSectionTwoComponent,
    DbrdSectionThreeComponent,
    DbrdSectionFourComponent,
    DbrdSectionFiveComponent,
    DbrdSectionSixComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
