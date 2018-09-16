import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LincareMapsService {

  googleApiKey: string = 'AIzaSyDimpTu9QuSSBJWu5zuSBmEI4UpsldMzhg';

  constructor(private http: HttpClient) { }

  // Make and http.get request to ViaCEP API, providing the correct entire url with the cep
  // Return a address json that is used on lincare-maps.component
  getAddress(cep: any) {
  	let uri = 'https://viacep.com.br/ws/';
  	return this.http.get<any>(uri + cep.value + '/json/');
  }

  // Make and http.get request to Google Maps Geocoder API, providing the correct entire url with the address
  // Return a json which cointain the latitude and longitude required to find a specific point in the map
  getCoordinates(address: string) {
  	let uri = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  	return this.http.get<any>(uri + address + '&key=' + this.googleApiKey);
  }
}