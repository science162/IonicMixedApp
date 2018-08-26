import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap,GoogleMapOptions,GoogleMapsEvent} from '@ionic-native/google-maps';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {

  map: GoogleMap ;
  mapElement: HTMLElement;


  constructor(private googleMaps: GoogleMaps, public platform:Platform) {

  }

  loadMap() {
    this.mapElement = document.getElementById('map');
    let mapOption : GoogleMapOptions = {
      camera:{
        target:
        {
          lat:43.0741904,
          lng:-89.3809802
        },
        zoom: 18,
        tilt:30
      }
    }
    this.map = GoogleMaps.create(this.mapElement, mapOption);
    this.map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        alert("Map is ready to be used")
      }
    )
  }

}
