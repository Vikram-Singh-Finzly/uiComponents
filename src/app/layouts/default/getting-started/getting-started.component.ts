import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent implements OnInit {
  selectedLink = 'div1';
  link = `<link href="https://s3.aws.amazon.com/s3/buckets" type="text/css" rel="stylesheet"/>`;
  installLink = `ng add @angular/material`;
  angularjsoncode = `  "styles": [
    "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
    "src/styles.scss"
  ],`;
  impoetmattablemodule=`import { MatTableModule } from '@angular/material/table';

  
  @NgModule({
    declarations: [],
    imports: [
      MatTableModule
    ]`;
  constructor() {}
  ngOnInit(): void {}
  hightligth(linkName: string) {
    this.selectedLink = linkName;
  }
}
