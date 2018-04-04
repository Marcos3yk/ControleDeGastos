
import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';

import { AppCommonModule } from './shared/app-common/app-common.module';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'app';
  private items: MenuItem[];

  ngOnInit() {
    this.items = [{
        label: 'Ganhos',
        items: [
            {label: 'Novo', icon: 'fa-plus'},
            {label: 'Open', icon: 'fa-download'}
        ]
    },
    {
        label: 'Despesas',
        items: [
            {label: 'Novo', icon: 'fa-plus'},
            {label: 'Redo', icon: 'fa-repeat'}
        ]
    },
    {
      label: 'Usuarios',
      items: [
          {label: 'Novo', icon: 'fa-plus'},
          {label: 'Editar', icon: 'fa-edit'}
      ]
    }

    ];
  }
}
