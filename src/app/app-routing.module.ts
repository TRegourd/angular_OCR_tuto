import { AuthGardService } from './services/auth-gard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'appareils',
    canActivate: [AuthGardService],
    component: AppareilViewComponent,
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGardService],
    component: SingleAppareilComponent,
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
