import {Observable, of} from 'rxjs';
import {Template} from '../../../core/models/template.model';
import {TEMPLATE_LIST} from '../../../core/mock/data/template-list.data';

export class TemplateService {
  getTemplateList(): Observable<Template[]> {
    return of(TEMPLATE_LIST);
  }
}
