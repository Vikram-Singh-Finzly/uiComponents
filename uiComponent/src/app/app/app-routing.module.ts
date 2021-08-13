import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './layouts/default/components/table/table.component';
import { DefaultComponent } from './layouts/default/default.component';
import { GettingStartedComponent } from './layouts/default/getting-started/getting-started.component';
import { StylesheetComponent } from './layouts/default/stylesheet/stylesheet.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'css',
        component: StylesheetComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: '',
        component: GettingStartedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
