import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockLocations } from '../Mock/mock';
import { AppLocations } from '../interface/Locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  //Injections
  mockLocations = mockLocations;

  constructor() { }

  getAllLocations(): Observable<AppLocations[]> {
    return of(this.mockLocations);
  }

}
