import { Component } from '@angular/core';

@Component({
  selector: 'sleep-menu',
  templateUrl: '../vue/menu.html',
  styleUrls: ['../css/all.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
  ]
})
export class MenuComponent {
  APIAdress = "http://localhost:8000";
}
