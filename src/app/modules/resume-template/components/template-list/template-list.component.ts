import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Template} from '../../../../core/models/template.model';
import {TemplateService} from '../../services/template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {
  templates$: Observable<Template[]> = of([]);

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templates$ = this.templateService.getTemplateList();
  }

}
