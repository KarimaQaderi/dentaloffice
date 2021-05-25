import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsComponent } from './app/components/components.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
 
    FooterComponent,
    HeaderComponent,
    ComponentsComponent,
    BannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
