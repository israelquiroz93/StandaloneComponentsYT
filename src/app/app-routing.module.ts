import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone/standalone.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo:'standalone'},
  // {path:'standalone', component:StandaloneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
