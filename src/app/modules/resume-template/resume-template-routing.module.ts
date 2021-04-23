import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateListComponent} from './components/template-list/template-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'list'},
  {path: 'list', component: TemplateListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeTemplateRoutingModule {
}
