import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { StreetsterTextComponent } from './streetster-text/streetster-text.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { MailingComponent } from './mailing/mailing.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstBlockComponent,
    SelectedProductsComponent,
    StreetsterTextComponent,
    AboutComponent,
    NewsComponent,
    MailingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
