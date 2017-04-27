import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TwitterComponent } from './twitter.component';
import { routing } from './twitter.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    TwitterComponent
  ],
  bootstrap: [
    TwitterComponent
  ]
})
export class TwitterModule {}
