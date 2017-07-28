import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { customerService } from '../customer/customer.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AboutPageComponent],
  providers:[customerService]
})
export class AboutModule { }
