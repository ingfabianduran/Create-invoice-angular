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

@NgModule({
  declarations: [
    AppComponent,
    HeaderInvoinceComponent,
    ArticlesInvoinceComponent,
    TotalsInvoinceComponent,
    InvoincePageMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule.forRoot({ type: 'timer' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
