import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {Route, RouterModule, ROUTES} from '@angular/router';

const routes: Route[] = [{path: '', component: AboutComponent, pathMatch: 'full'}];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule {
}
