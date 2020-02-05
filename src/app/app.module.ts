import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { DeliveryListActiveComponent } from './components/delivery-list-active/delivery-list-active.component';
import { DeliveryListCompletedComponent } from './components/delivery-list-completed/delivery-list-completed.component';
import { DeliveryCreateComponent } from './components/delivery-create/delivery-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { DeliveryDetailComponent } from './components/delivery-detail/delivery-detail.component';
import { DeliveryUpdateComponent } from './components/delivery-update/delivery-update.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
