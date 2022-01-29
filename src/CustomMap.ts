// import { Company } from './Company';
// import { User } from './User';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;

  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elemId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elemId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapabble: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapabble.location.lat,
        lng: mapabble.location.lng,
      },
    });

    marker.addListener('click', function () {
      const infoWindow = new google.maps.InfoWindow({
        content: mapabble.markerContent(),
      });
      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
        shouldFocus: false,
      });
    });
  }
}
