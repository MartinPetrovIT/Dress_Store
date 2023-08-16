import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { WithoutLayoutComponent } from './layouts/without-layout/without-layout.component';
import { WithLayoutComponent } from './layouts/with-layout/with-layout.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { SharedModule } from '@coreui/angular';
import { HttpConfigDressStore } from './http.config';

@NgModule({
  providers:[HttpConfigDressStore],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WithoutLayoutComponent,
    WithLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
