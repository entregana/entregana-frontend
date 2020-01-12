import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { DeliveryListActiveComponent } from './components/delivery-list-active/delivery-list-active.component';
import { DeliveryListCompletedComponent } from './components/delivery-list-completed/delivery-list-completed.component';
import { DeliveryCreateComponent } from './components/delivery-create/delivery-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { DeliveryDetailComponent } from './components/delivery-detail/delivery-detail.component';
import { DeliveryUpdateComponent } from './components/delivery-update/delivery-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeliveryListActiveComponent,
    DeliveryListCompletedComponent,
    DeliveryCreateComponent,
    DeliveryDetailComponent,
    DeliveryUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
