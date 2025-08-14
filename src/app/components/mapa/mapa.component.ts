import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import {GoogleMap, MapAdvancedMarker} from '@angular/google-maps';
import { LocationService } from '../../services/mapa';
import { AppLocations } from '../../interface/Locations';


@Component({
  selector: 'app-mapa',
  imports: [CommonModule, GoogleMap, MapAdvancedMarker],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit, AfterViewInit {

  // VARIABLES
  mapVisible = false;

  // INJECTS
  private _locationService = inject(LocationService)

  //SIGNALS
  locations = signal<AppLocations[]>([])


ngAfterViewInit() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.mapVisible = true;
        observer.disconnect();
      }
    });
  });
  observer.observe(document.querySelector('#map')!);
}

  ngOnInit() {
    this._locationService.getAllLocations().subscribe(data => {
      this.locations.set(data);
    });
  }

  center = signal<google.maps.LatLngLiteral>({lat: -34.603957, lng: -58.386510});
  zoom = signal<number>(17);
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
