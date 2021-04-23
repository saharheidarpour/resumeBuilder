import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateListComponent} from './components/template-list/template-list.component';
import {ResumeTemplateRoutingModule} from './resume-template-routing.module';
import {ResumeTemplateComponent} from './components/resume-template.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {TemplateService} from './services/template.service';


@NgModule({
  declarations: [
    TemplateListComponent,
    ResumeTemplateComponent
  ],
  imports: [
    CommonModule,
    ResumeTemplateRoutingModule,
    DragScrollModule
  ],
  providers: [TemplateService]
})
export class ResumeTemplateModule {
}
