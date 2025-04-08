import { Injectable } from '@angular/core';
import * as countries from 'i18n-iso-countries';
import * as es from 'i18n-iso-countries/langs/es.json';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor() {
    countries.registerLocale(es);
  }

  getCountries(): { code: string; name: string; flag: string }[] {
    return Object.entries(countries.getNames('es', { select: 'official' }))
      .map(([code, name]) => ({
        code,
        name,
        flag: `https://flagcdn.com/w40/${code.toLowerCase()}.png`
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  

  private getFlagEmoji(countryCode: string): string {
    return countryCode
      .toUpperCase()
      .replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );
  }
}
