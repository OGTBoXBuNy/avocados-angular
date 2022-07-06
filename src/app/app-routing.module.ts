import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
