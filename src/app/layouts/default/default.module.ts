import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TableComponent } from './components/table/table.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { StylesheetComponent } from './stylesheet/stylesheet.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    DefaultComponent,
    GettingStartedComponent,
    TableComponent,
    StylesheetComponent,
  ],
  imports: [SharedModule, HighlightModule, ScrollToModule.forRoot()],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
})
export class DefaultModule {}
