import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './components/Home.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    HomeModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
