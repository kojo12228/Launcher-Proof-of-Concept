import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { FrameComponent } from './frame/frame.component';
import { FrameAComponent, FrameBComponent } from './frames.component';

const routes: Routes = [
  { path: 'itema', component: FrameAComponent },
  { path: 'itemb', component: FrameBComponent },
  { path: 'home', component: FrameComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
