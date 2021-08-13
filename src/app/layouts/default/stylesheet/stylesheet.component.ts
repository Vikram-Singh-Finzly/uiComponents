import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
@Component({
  selector: 'app-stylesheet',
  templateUrl: './stylesheet.component.html',
  styleUrls: ['./stylesheet.component.scss'],
})
export class StylesheetComponent implements OnInit {
  response: HighlightResult | undefined;
  constructor() {}
  ngOnInit(): void {}
  onHighlight(e: any) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}',
    };
  }
  code = `
  /* General Reset */
  * {
    margin: 0;
    padding: 0;
  }
  /* Font Classes */
  @font-face {
    font-family: font;
    src: url(./assets/fonts/font.otf);
  }
  
  /* Body Base */
  body {
    font-family: font;
    color: #343f43;
    font-style: normal;
    font-weight: normal;
    line-height: 112%;
/*  background-color: #e5e5e5; */
  }
  
  
  /* Margin and Padding */
  .fin-m-0 {
    margin: 0 !important;
  }
  
  .fin-mt-0,
  .fin-my-0 {
    margin-top: 0 !important;
  }
  
  .fin-mr-0,
  .fin-mx-0 {
    margin-right: 0 !important;
  }
  
  .fin-mb-0,
  .fin-my-0 {
    margin-bottom: 0 !important;
  }
  
  .fin-ml-0,
  .fin-mx-0 {
    margin-left: 0 !important;
  }
  
  .fin-m-1 {
    margin: 0.25rem !important;
  }
  
  .fin-mt-1,
  .fin-my-1 {
    margin-top: 0.25rem !important;
  }
  
  .fin-mr-1,
  .fin-mx-1 {
    margin-right: 0.25rem !important;
  }
  
  .fin-mb-1,
  .fin-my-1 {
    margin-bottom: 0.25rem !important;
  }
  
  .fin-ml-1,
  .fin-mx-1 {
    margin-left: 0.25rem !important;
  }
  
  .fin-m-2 {
    margin: 0.5rem !important;
  }
  
  .fin-mt-2,
  .fin-my-2 {
    margin-top: 0.5rem !important;
  }
  
  .fin-mr-2,
  .fin-mx-2 {
    margin-right: 0.5rem !important;
  }
  
  .fin-mb-2,
  .fin-my-2 {
    margin-bottom: 0.5rem !important;
  }
  
  .fin-ml-2,
  .fin-mx-2 {
    margin-left: 0.5rem !important;
  }
  
  .fin-m-3 {
    margin: 1rem !important;
  }
  
  .fin-mt-3,
  .fin-my-3 {
    margin-top: 1rem !important;
  }
  
  .fin-mr-3,
  .fin-mx-3 {
    margin-right: 1rem !important;
  }
  
  .fin-mb-3,
  .fin-my-3 {
    margin-bottom: 1rem !important;
  }
  
  .fin-ml-3,
  .fin-mx-3 {
    margin-left: 1rem !important;
  }
  
  .fin-m-4 {
    margin: 1.5rem !important;
  }
  
  .fin-mt-4,
  .fin-my-4 {
    margin-top: 1.5rem !important;
  }
  
  .fin-mr-4,
  .fin-mx-4 {
    margin-right: 1.5rem !important;
  }
  
  .fin-mb-4,
  .fin-my-4 {
    margin-bottom: 1.5rem !important;
  }
  
  .fin-ml-4,
  .fin-mx-4 {
    margin-left: 1.5rem !important;
  }
  
  .fin-m-5 {
    margin: 3rem !important;
  }
  
  .fin-mt-5,
  .fin-my-5 {
    margin-top: 3rem !important;
  }
  
  .fin-mr-5,
  .fin-mx-5 {
    margin-right: 3rem !important;
  }
  
  .fin-mb-5,
  .fin-my-5 {
    margin-bottom: 3rem !important;
  }
  
  .fin-ml-5,
  .fin-mx-5 {
    margin-left: 3rem !important;
  }
  
  .fin-p-0 {
    padding: 0 !important;
  }
  
  .fin-pt-0,
  .fin-py-0 {
    padding-top: 0 !important;
  }
  
  .fin-pr-0,
  .fin-px-0 {
    padding-right: 0 !important;
  }
  
  .fin-pb-0,
  .fin-py-0 {
    padding-bottom: 0 !important;
  }
  
  .fin-pl-0,
  .fin-px-0 {
    padding-left: 0 !important;
  }
  
  .fin-p-1 {
    padding: 0.25rem !important;
  }
  
  .fin-pt-1,
  .fin-py-1 {
    padding-top: 0.25rem !important;
  }
  
  .fin-pr-1,
  .fin-px-1 {
    padding-right: 0.25rem !important;
  }
  
  .fin-pb-1,
  .fin-py-1 {
    padding-bottom: 0.25rem !important;
  }
  
  .fin-pl-1,
  .fin-px-1 {
    padding-left: 0.25rem !important;
  }
  
  .fin-p-2 {
    padding: 0.5rem !important;
  }
  
  .fin-pt-2,
  .fin-py-2 {
    padding-top: 0.5rem !important;
  }
  
  .fin-pr-2,
  .fin-px-2 {
    padding-right: 0.5rem !important;
  }
  
  .fin-pb-2,
  .fin-py-2 {
    padding-bottom: 0.5rem !important;
  }
  
  .fin-pl-2,
  .fin-px-2 {
    padding-left: 0.5rem !important;
  }
  
  .fin-p-3 {
    padding: 1rem !important;
  }
  
  .fin-pt-3,
  .fin-py-3 {
    padding-top: 1rem !important;
  }
  
  .fin-pr-3,
  .fin-px-3 {
    padding-right: 1rem !important;
  }
  
  .fin-pb-3,
  .fin-py-3 {
    padding-bottom: 1rem !important;
  }
  
  .fin-pl-3,
  .fin-px-3 {
    padding-left: 1rem !important;
  }
  
  .fin-p-4 {
    padding: 1.5rem !important;
  }
  
  .fin-pt-4,
  .fin-py-4 {
    padding-top: 1.5rem !important;
  }
  
  .fin-pr-4,
  .fin-px-4 {
    padding-right: 1.5rem !important;
  }
  
  .fin-pb-4,
  .fin-py-4 {
    padding-bottom: 1.5rem !important;
  }
  
  .fin-pl-4,
  .fin-px-4 {
    padding-left: 1.5rem !important;
  }
  
  .fin-p-5 {
    padding: 3rem !important;
  }
  
  .fin-pt-5,
  .fin-py-5 {
    padding-top: 3rem !important;
  }
  
  .fin-pr-5,
  .fin-px-5 {
    padding-right: 3rem !important;
  }
  
  .fin-pb-5,
  .fin-py-5 {
    padding-bottom: 3rem !important;
  }
  
  .fin-pl-5,
  .fin-px-5 {
    padding-left: 3rem !important;
  }
  /* bankos Grid Style*/
  // bankos Responsive Containers
  .fin-container {
    width: 80.88%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .fin-row {
    display: flex;
    flex-wrap: wrap;
  }
  // bankos Responsive columns
  .fin-col-1,
  .fin-col-2,
  .fin-col-3,
  .fin-col-4,
  .fin-col-5,
  .fin-col-6,
  .fin-col-7,
  .fin-col-8,
  .fin-col-9,
  .fin-col-10,
  .fin-col-11,
  .fin-col-12,
  .fin-col {
    position: relative;
    width: 100%;
  }
  
  .fin-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .fin-col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  
  .fin-col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .fin-col-2-5 {
    -ms-flex: 0 0 20.5%;
    flex: 0 0 20.5%;
    max-width: 20.5%;
  }
  .fin-col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  
  .fin-col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  
  .fin-col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  
  .fin-col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .fin-col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  
  .fin-col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  
  .fin-col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  
  .fin-col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  
  .fin-col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  
  .fin-col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .fin-button-container {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 38.666667%;
    padding-right: 32px;
  }
  
  .hide {
    display: none !important;
  }
  //--------------------------------Button Style-------------------------------
  .fin-button {
    background: #19a0db;
    border-radius: 10px;
    align-self: center;
    color: #ffffff;
    padding: 14px 32px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
  .fin-edit-button {
    font-size: 12px;
    background-color: #e5e5e5;
    color: #343f43;
    opacity: 0.8;
    border: 1px solid #343f43;
  }
  .fin-search-button {
    font-size: 12px;
  }
  .fin-add-button {
    width: 80%;
    font-size: 12px;
  }
  .fin-approve-button {
    font-size: 12px;
    background-color: #73dfab;
  }
  .fin-reject-button {
    font-size: 12px;
    background-color: #ff8087;
  }
  .fin-danger-button {
    background-color: #ff8087;
  }
  .fin-success-button {
    background-color: #73dfab;
  }
  .fin-search-button img {
    padding-right: 10px;
  }
  .fin-add-button img {
    padding-right: 10px;
  }
  .fin-edit-button img {
    padding-right: 25px;
  }
  .fin-save-button {
    width: 80%;
    margin: auto;
    margin-right: 15px;
    float: right;
    background: #19a0db;
    margin-top: 8px;
  }
  .fin-step-button {
    background: #ffffff;
    color: #747779;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
    margin-right: 8px;
    margin-top: 8px;
  }
  .fin-step-button-isActive {
    background: #19a0db;
    color: #ffffff;
  }
  .fin-save-button img {
    padding-right: 10px;
  }
  .fin-add-step-button {
    margin-top: 8px;
    color: #000000;
    border: 2px dashed rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
    opacity: 0.5;
    background: #e5e5e5;
  }
  .fin-title-button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding-top: 30px;
    padding-right: 8px;
  }
  .fin-delete-button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding-top: 30px;
    padding-left: 8px;
  }
  //--------------------------------Side Menu Style-------------------------------
  
  .fin-sidebar-card {
    padding-left: 24px;
    padding-right: 24px;
    margin: auto;
    width: 80%;
  
    background: #ffffff;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  }
  
  .fin-sidebar-item {
    color: #343f43;
    opacity: 0.8;
    font-size: 14px;
    display: block;
    text-decoration: none;
    padding-top: 22px;
    padding-bottom: 22px;
    border-bottom: 1px solid rgba(52, 63, 67, 0.08);
  }
  .fin-sidebar-item-count {
    font-weight: 300;
    font-size: 12px;
    float: right;
    /*  padding-right: 24px; */
  }
  .fin-sidebar-item i {
    position: relative;
    top: 3px;
    padding-right: 14px;
  }
  .fin-text-icon {
    top: 1px !important;
  }
  .fin-textarea-icon {
    top: 6px !important;
  }
  .fin-bold {
    font-weight: 500 !important;
    font-size: 24px !important;
    line-height: 125% !important;
    width: 340px;
    color: #343f43;
  }
  //--------------middle pannel-------------
  
  .fin-middle-card-title {
    margin: auto;
    width: 95.6%;
    /*   height: 104px; */
    background: #ffffff;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px 10px 0px 0px;
    padding-bottom: 16px !important;
  }
  .fin-middle-item-title {
    padding: 16px;
    background: rgba(232, 234, 235, 0.2);
  }
  .fin-middle-card {
    margin: auto;
    width: 95.6%;
    min-height: 740px;
    background: #ffffff;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
  }
  
  .fin-middle-item {
    margin-bottom: 16px;
    margin-left: 16px !important;
    margin-right: 16px !important;
    color: #343f43;
    font-size: 14px;
    display: block;
    height: auto;
    text-decoration: none;
    padding-left: 24px;
    padding-bottom: 18px;
    cursor: -webkit-grabbing;
    cursor: grabbing;
    padding-top: 18px;
    background: rgba(232, 234, 235, 0.2);
    border-radius: 8px;
  }
  .fin-middle-item-count {
    float: right;
    position: relative;
    top: 4px;
    padding-top: 0px;
    padding-right: 24px;
  }
  
  .fin-middle-item i {
    position: relative;
    top: 4px;
    padding-right: 18px;
  }
  .fin-label {
    font-size: 16px;
    line-height: 118.5%;
    color: #343f43;
  }
  //--------------------------------nav-secondary Style-------------------------------
  .fin-nav-secondary {
    font-size: 18px;
    opacity: 0.8;
  }
  //--------------------------------tab-filter Style-------------------------------
  .fin-tab-filter {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
  }
  .fin-tab-filter ul li {
    position: relative;
    display: inline-block;
    padding: 14px 32px;
    cursor: pointer;
    font-size: 12px;
    background: #ffffff;
    border-right: 1px solid rgba(52, 63, 67, 0.08);
  }
  
  .fin-tab-filter-left-radius {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .fin-tab-filter-right-radius {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .fin-tab-filter-isActive {
    color: #ffffff;
    background: #19a0db !important;
  }
  
  .fin-tab-filter-item-count {
    padding-right: 32px;
    padding-left: 8px;
    padding-right: 0px;
    opacity: 0.6;
  }
  .fin-tab-filter button {
    align-content: flex-end;
  }
  .fin-right-align {
    text-align: right;
  }
  .fin-float-right {
    float: right;
  }
  //--------------------------------table Style-------------------------------
  .fin-table {
    box-shadow: 0px 1px 5px -3px;
    width: 100%;
  }
  .fin-cell {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    cursor: pointer;
  }
  
  
  //----------------------Bankos Pagination-----------------
  .fin-custom-pagination {
    display: inline-flex;
  }
  .fin-custom-pagination .fin-page-number {
    text-decoration: none;
    position: relative;
    color: #747779;
    background: #e8eaeb;
    padding: 14px 14px;
    font-size: 14px;
  }
  
  .fin-page-number.fin-current span {
    background-color: #19a0db !important;
    color: white !important;
    border-radius: 50px;
    padding: 10px 14px;
  }
  
  .fin-page-number span {
    cursor: pointer;
  }
  
  .fin-pagination-previous {
    text-decoration: none;
    position: relative;
    color: #747779;
    background: #e8eaeb;
    padding: 14px 14px;
    font-size: 14px;
    cursor: pointer;
    padding-left: 30px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .fin-pagination-next {
    text-decoration: none;
    position: relative;
    color: #747779;
    background: #e8eaeb;
    padding: 14px 14px;
    font-size: 14px;
    cursor: pointer;
    padding-right: 30px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  //-----------------------dropdown-----------
  .fin-dropbtn {
    background: #e5e5e5;
    padding: 5px 15px;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    text-align: right;
    color: #343f43;
    opacity: 0.8;
    font-family: font;
    cursor: pointer;
    appearance: none;
    background-image: url("assets/icons/select-arrow.png");
    background-repeat: no-repeat;
    background-position: right 0px top 50%;
  }
  .fin-curser {
    cursor: pointer;
  }
  .fin-dropup {
    position: relative;
    display: inline-block;
  }
  
  .fin-dropup-content {
    display: none;
    position: absolute;
    background: #ffffff;
    min-width: 155px;
    bottom: 24px;
    z-index: 1;
    text-align: center;
    font-family: font;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .fin-dropup-content a {
    color: #343f43;
    padding: 9px 24px;
    opacity: 0.8;
    text-decoration: none;
    display: block;
  }
  
  .fin-dropup-content a:hover {
    background-color: #ccc;
  }
  
  .fin-dropup:hover .fin-dropup-content {
    display: block;
  }
  
  //---------------------Colors-----------------
  .fin-text-green {
    color: #3fc17b;
    opacity: 0.8;
  }
  .fin-text-red {
    color: #d80909;
    opacity: 0.8;
  }
  .fin-text-blue {
    color: #0999d8;
    opacity: 0.8;
  }
  //-------------------------shapes-------------------
  .fin-circle {
    border-radius: 50%;
    padding: 14px 12px;
    border: 1px solid #e5e5e5;
  }
  //---------------------form DetailSection----------------
  .fin-form-detail-section {
    /*  max-height: 565px; */
    background: #ffffff !important;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    /* overflow-y: scroll; */
  }
  .fin-form-detail-section::-webkit-scrollbar {
    display: none;
  }
  
  .fin-form-detail-header {
    padding-top: 38px;
    padding-bottom: 38px;
    padding-left: 48px;
    background: rgba(232, 234, 235, 0.2);
    border-radius: 10px 10px 0px 0px;
    /*   position: sticky;
    top: 0px; */
  }
  .fin-form-header-name {
    font-weight: 500;
    font-size: 24px;
    color: #343f43;
    padding: 14px 0px;
  }
  .fin-form-row {
    padding: 38px 48px;
    font-size: 16px;
    line-height: 100%;
    color: #747779;
    border-bottom: 1px solid #e9eef3;
  }
  .fin-form-inner-row-keys {
    font-size: 14px;
    color: #343f43;
    padding-bottom: 3px;
    opacity: 0.7;
  }
  .fin-form-inner-row-value {
    font-size: 16px;
    font-weight: 500;
    color: #343f43;
    padding-bottom: 15px;
  }
  .fin-input-field {
    margin-right: 18px;
    font-size: 14px;
    color: #343f43;
  }
  
  .fin-checkbox-container {
    position: relative;
    padding-left: 34px;
    padding-top: 5px;
    font-size: 14px;
    line-height: 20px;
    color: #343f43;
  }
  /* Hide the browser's default checkbox */
  .fin-checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    /*   opacity: 0.16; */
    border: 1px solid lightgray;
    box-sizing: border-box;
    border-radius: 4px;
  }
  
  /* On mouse-over, add a grey background color */
  .fin-checkbox-container:hover input ~ .checkmark {
    background-color: white;
  }
  
  /* When the checkbox is checked, add a blue background */
  .fin-checkbox-container input:checked ~ .checkmark {
    background-color: white;
    /*   border: 2px solid #0c89db; */
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
  
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .fin-checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .fin-checkbox-container .checkmark:after {
    left: 7px;
    top: 2px;
    width: 4px;
    height: 10px;
    border: 2px solid #0c89db;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .fin-checkbox-container input:checked ~ .option-style {
    color: #0999d8;
  }
  .fin-upload-button {
    position: absolute;
    top: 30px;
    left: 0px;
    width: 280px;
    height: 193px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72));
    cursor: pointer;
    border-radius: 6px;
  }
  .fin-upload-button-text {
    text-align: center;
    opacity: 0.8;
    font-size: 14px;
    color: #ffffff;
  }
  //-----------radio style-----------
  .fin-radio-container {
    display: block;
    position: relative;
    padding-left: 34px;
    padding-top: 2px;
    margin-bottom: 18px;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    color: #8b98a4;
    user-select: none;
  }
  
  /* Hide the browser's default radio button */
  .fin-radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  /* Create a custom radio button */
  .checkmark-radio {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 1px solid #e8eaeb;
    border-radius: 50%;
  }
  
  /* On mouse-over, add a grey background color */
  .fin-radio-container:hover input ~ .checkmark-radio {
    background-color: #ccc;
  }
  
  /* When the radio button is checked, add a blue background */
  .fin-radio-container input:checked ~ .checkmark-radio {
    background-color: #fff;
    border: 2px solid #0c89db;
  }
  
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark-radio:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the indicator (dot/circle) when checked */
  .fin-radio-container input:checked ~ .checkmark-radio:after {
    display: block;
  }
  
  /* Style the indicator (dot/circle) */
  .fin-radio-container .checkmark-radio:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0c89db;
  }
  .fin-radio-container input:checked ~ .option-style {
    color: #0c89db;
  }
  .fin-form-button {
    border: 1px solid #e8eaeb;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px;
    font-weight: 300;
    font-size: 14px;
    color: #747779;
    cursor: pointer;
  }
  .fin-form-button:hover {
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.04);
    color: #0999d8;
  }
  .fin-no-bottom-border {
    border-bottom: 0px !important;
    margin-top: -108px;
  }
  
  //---------Search Popup---------
  .fin-popup-content .input {
    position: relative;
    width: 304px;
    height: 48px;
    border: 1px solid #e8eaeb;
    box-sizing: border-box;
    border-radius: 4px;
    outline-color: #e8eaeb;
    padding-left: 24px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 112%;
    color: #747779;
    margin-bottom: 10px;
  }
  .fin-popup-content {
    // width: 304px;
    // height: 160px;
    background: #ffffff;
    border-radius: 4px;
    font-size: 12px;
    line-height: 112%;
    color: #343f43;
  }
  
  //--------Message PopUp style-----
  
  .fin-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 500ms;
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
  
  .fin-popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    width: 25%;
    position: relative;
    transition: all 5s ease-in-out;
  }
  
  .fin-popup .close {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
  }
  .fin-popup .fin-popup-content {
    max-height: 30%;
    overflow: auto;
    margin-top: 30px;
    font-size: 14px;
    text-align: center;
    color: red;
  }
  
  .fin-popup .fin-popup-header {
    font-weight: 800;
    font-size: 20px;
    line-height: 112%;
    text-align: center;
    margin-top: 45px;
  }
  
 `;
}
