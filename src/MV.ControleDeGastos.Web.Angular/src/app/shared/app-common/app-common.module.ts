import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  imports: [
    CommonModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    BrowserModule
    // MenuItem
  ],
  declarations: [
   // PanelMenuModule
  ],

  exports: [
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    BrowserModule
  ]
})
export class AppCommonModule { }
