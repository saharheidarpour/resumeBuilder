import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateListComponent} from './components/template-list/template-list.component';
import {ResumeTemplateRoutingModule} from './resume-template-routing.module';
import {ResumeTemplateComponent} from './components/resume-template.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {TemplateService} from './services/template.service';
import {TemplateItemComponent} from './components/template-item/template-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    TemplateListComponent,
    ResumeTemplateComponent,
    TemplateItemComponent
  ],
  imports: [
    CommonModule,
    ResumeTemplateRoutingModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
  ],
  providers: [TemplateService]
})
export class ResumeTemplateModule {
}
