import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { CctvComponent } from './cctv/cctv.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'cctv', component: CctvComponent },
  { path: '**', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
