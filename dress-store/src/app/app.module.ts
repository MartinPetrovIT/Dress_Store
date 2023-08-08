import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
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

import { MaterialModule } from './material.module';

@NgModule({
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
    RouterModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
