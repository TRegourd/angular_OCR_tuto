import { AuthGardService } from './services/auth-gard.service';
import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    NotFoundComponent,
    EditAppareilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AppareilService, AuthService, AuthGardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
