import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public InfoPaginaService: InfoPaginaService) {}
}
