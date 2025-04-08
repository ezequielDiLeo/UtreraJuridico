import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.fullscreen/Control.FullScreen.js';

@Component({
  selector: 'app-mapa',
  imports: [CommonModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit {
  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const coordenadas:any = [-34.586400, -58.414132];
    this.map = L.map('map', {
      center: coordenadas,
      zoom: 16
    } as any);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  
    L.marker(coordenadas).addTo(this.map)
      .bindPopup('Oficina Palermo')
      .openPopup();

      (L.control as any).fullscreen({
        position: 'topleft'
      }).addTo(this.map!);
    }
}
