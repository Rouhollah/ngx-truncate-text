import { NgModule } from '@angular/core';
import { NgxTruncateTextDirective } from './ngx-truncate-text';
import { NgxTruncateService } from './ngx-truncate.service';

@NgModule({
  declarations: [NgxTruncateTextDirective],
  imports: [
  ],
  exports: [NgxTruncateTextDirective],
  providers:[NgxTruncateService]
})
export class NgxTruncateTextModule { }
