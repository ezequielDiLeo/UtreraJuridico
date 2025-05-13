import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {GoogleMap, MapAdvancedMarker} from '@angular/google-maps';
import { LocationService } from '../../services/mapa';
import { AppLocations } from '../../interface/Locations';


@Component({
  selector: 'app-mapa',
  imports: [CommonModule, GoogleMap, MapAdvancedMarker],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {

  // INJECTS
  private _locationService = inject(LocationService)

  //SIGNALS
  locations = signal<AppLocations[]>([])

  ngOnInit() {
    this._locationService.getAllLocations().subscribe(data => {
      this.locations.set(data);
    });
  }

  center = signal<google.maps.LatLngLiteral>({lat: -34.604081, lng: -58.386048});
  zoom = signal<number>(16);
  display: google.maps.LatLngLiteral | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center.set(event.latLng.toJSON());
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center.set(event.latLng.toJSON());
    }
  }

}
