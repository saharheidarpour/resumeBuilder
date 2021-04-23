import {Component, OnInit} from '@angular/core';
import {TemplateService} from '../services/template.service';
import {Observable, of} from 'rxjs';
import {Template} from '../../../core/models/template.model';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.scss']
})
export class ResumeTemplateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
