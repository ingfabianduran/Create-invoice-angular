import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderInvoinceComponent } from './components/header-invoince/header-invoince.component';
import { ArticlesInvoinceComponent } from './components/articles-invoince/articles-invoince.component';
import { TotalsInvoinceComponent } from './components/totals-invoince/totals-invoince.component';
import { InvoincePageMainComponent } from './pages/invoince-page-main/invoince-page-main.component';
import { MaterialModule } from './modules/material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InvoicesPageMainComponent } from './pages/invoices-page-main/invoices-page-main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AlertInterceptor } from './interceptors/alert.interceptor';
import { StoreModule } from '@ngrx/store';
import { invoicesReducer } from './store/invoices.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderInvoinceComponent,
    ArticlesInvoinceComponent,
    TotalsInvoinceComponent,
    InvoincePageMainComponent,
    InvoicesPageMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule.forRoot({ type: 'timer' }),
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ invoices: invoicesReducer })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AlertInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
