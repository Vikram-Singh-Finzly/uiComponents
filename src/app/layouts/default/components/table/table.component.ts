import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  data = [
    { 'currency': 'INR', 'currency type': 'Indian', 'is disabled': true, 'last updated by': 'John' },
    { 'currency': 'USD', 'currency type': 'American', 'is disabled':false, 'last updated by': 'Alleay' },
    { 'currency': 'Euro', 'currency type': 'European', 'is disabled': false, 'last updated by': 'Rahul' },
    { 'currency': 'USD', 'currency type': 'American', 'is disabled': true, 'last updated by': 'Prashant' },
    { 'currency': 'INR', 'currency type': 'Indian', 'is disabled':false, 'last updated by': 'Ashok' },
  ];
  data2 = [
    { 'currency': 'INR', 'currency type': 'Indian', 'is disabled': true, 'last updated by': 'John' },
    { 'currency': 'USD', 'currency type': 'American', 'is disabled':false, 'last updated by': 'Alleay' },
    { 'currency': 'Euro', 'currency type': 'European', 'is disabled': false, 'last updated by': 'Rahul' },
    { 'currency': 'USD', 'currency type': 'American', 'is disabled': true, 'last updated by': 'Prashant' },
    { 'currency': 'INR', 'currency type': 'Indian', 'is disabled':false, 'last updated by': 'Ashok' },
  ];
  displayedColumns: string[] = [ 'currency','currency type','is disabled','last updated by' ];
  displayedColumns2: string[] = [ 'currency','currency type','is disabled','last updated by','Action' ];
  /*   columnsToDisplay: string[] = this.displayedColumns; */
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor() {
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource2 = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }
  hightligth(linkName: string) {
    this.selectedLink = linkName;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  selectedLink = 'div1';
  tableHtmlCode = `<table mat-table [dataSource]="data" class="fin-table">
  <tr mat-header-row *matHeaderRowDef="displayedColumns"  ></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  <ng-container [matColumnDef]="column"   *ngFor="let column of displayedColumns">
    <th mat-header-cell *matHeaderCellDef > {{column | titlecase}} </th>
    <td mat-cell class="fin-cell" *matCellDef="let element"> {{element[column]}} </td>
  </ng-container>
</table>`;
tabletsCode = `import {  Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  data = [
    { 'currency': 'INR', 'currency type': 'Indian', 'is disabled': true, 'last updated by': 'John' },
    { 'currency': 'USD', 'currency type': 'American', 'is disabled':false, 'last updated by': 'Alleay' },
    { 'currency': 'Euro', 'currency type': 'European', 'is disabled': false, 'last updated by': 'Rahul' },
    { 'currency': 'USD', 'currency type': 'American', 'is disabled': true, 'last updated by': 'Prashant' },
    { 'currency': 'INR', 'currency type': 'Indian', 'is disabled':false, 'last updated by': 'Ashok' },
  ];
  displayedColumns: string[] = [ 'currency','currency type','is disabled','last updated by' ];
  constructor() {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }
}
`;
changeinhtmlCodeActionbutton=`<td mat-cell class="fin-cell" *matCellDef="let element"> {{element[column]}}
<span *ngIf="column==='Action'">
  <mat-icon style="color: red;">delete</mat-icon>
  <mat-icon>edit</mat-icon>
</span>
</td>`
changeintscodeActionButton=`displayedColumns: string[] = [ 'currency','currency type','is disabled','last updated by','Action' ];`;
  angularjsoncode = `  "styles": [
    "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
    "src/styles.scss"
  ],`;
}
