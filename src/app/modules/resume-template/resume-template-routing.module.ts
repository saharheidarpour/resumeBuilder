import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateListComponent} from './components/template-list/template-list.component';
import {TemplateItemComponent} from './components/template-item/template-item.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TemplateListComponent},
  {path: 'template/:id', component: TemplateItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeTemplateRoutingModule {
}
