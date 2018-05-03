import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { SecondInnerComponent } from './my-second/second-inner.component';
import { MyJumboComponent } from './my-jumbo/my-jumbo.component';
import { PartOneComponent } from './my-jumbo/part-one.component';
import { PartTwoComponent } from './my-jumbo/part-two.component';
import { DividerComponent } from './my-jumbo/divider.component';
import { FooterTxtComponent } from './footer-txt/footer-txt.component';
import { FirstFooterComponent } from './footer-txt/first-footer.component';
import { SecondFooterComponent } from './footer-txt/second-footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizeMakerDirective } from './directives/size-maker.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    SecondInnerComponent,
    MyJumboComponent,
    PartOneComponent,
    PartTwoComponent,
    DividerComponent,
    FooterTxtComponent,
    FirstFooterComponent,
    SecondFooterComponent,
    DirectivesComponent,
    SizeMakerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
