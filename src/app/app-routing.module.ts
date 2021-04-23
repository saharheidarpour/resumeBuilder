import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'about', loadChildren: (() => import('./modules/about/about.module').then(m => m.AboutModule))},
  {path: 'resume', loadChildren: (() => import('./modules/resume-template/resume-template.module').then(m => m.ResumeTemplateModule))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
