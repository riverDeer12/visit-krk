import {Component, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Router} from '@angular/router';
import * as data from '../../../assets/i18n/cro.json';
import {Sight} from '../../shared/models/sight';
import {SightTypes} from '../../shared/constants/sight-types';

export const RADIUS = 6371;

export class UserLocation {
  latitude: number;
  longitude: number;

  constructor(lat: number, long: number) {
    this.latitude = lat;
    this.longitude = long;
  }
}

export class TourDistance {
  tourName: string;
  distance: number;

  constructor(name: string, distance: number) {
    this.tourName = name;
    this.distance = Math.trunc(distance * 1.3);
  }
}

export class Tour {
  title: string;
  description: string;
  related: Sight[];
}

@Component({
  selector: 'app-closest-point',
  templateUrl: './closest-point.page.html',
  styleUrls: ['./closest-point.page.scss'],
})
export class ClosestPointPage implements OnInit {
  loadingUserLocation: boolean;

  loadingClosestTours: boolean;

  userLocation: UserLocation;

  tours: any;

  tourDistances: TourDistance[] = [];

  constructor(private geolocation: Geolocation, private router: Router) {
    this.tours = data.tours;
  }

  ngOnInit() {
    this.getUserLocation();
  }

  /**
   * Main method for
   * getting user's coordinates.
   */
  getUserLocation(): void {
    this.loadingUserLocation = true;
    this.loadingClosestTours = true;
    this.geolocation.getCurrentPosition().then((response) => {
      this.userLocation = new UserLocation(response.coords.latitude, response.coords.longitude);
      this.getClosestTours();
      this.loadingUserLocation = false;
    }).catch(() => {
      this.router.navigateByUrl('/introduction');
      this.loadingUserLocation = false;
    });
  }

  /**
   * Get distance based
   * on user's location.
   */
  getDistance(sightLatitude: number, sightLongitude: number): number {
    const latDistance = this.toRadians(this.userLocation.latitude - sightLatitude);
    const lonDistance = this.toRadians(this.userLocation.longitude - sightLongitude);

    const a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
        + Math.cos(this.toRadians(sightLatitude)) * Math.cos(this.toRadians(this.userLocation.latitude))
        * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distance = RADIUS * c * 1000;

    distance = Math.pow(distance, 2) + Math.pow(0, 2);

    return Math.sqrt(distance);
  }

  /**
   * Helper method for converting
   * degrees to radians.
   *
   * @param degrees result of
   * subtractions between user's
   * location and tour sight location.
   */
  toRadians(degrees: number): number {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }

  /**
   * Main method for getting
   * closest tours.
   */
  getClosestTours(): void {
    this.loadingClosestTours = true;

    const tourKeys = Object.keys(this.tours);

    tourKeys.forEach(tourKey => {
      const relatedSights = data.tours[tourKey].related;
      const relatedSightsKeys = Object.keys(relatedSights);
      const entryPointSightKey = relatedSightsKeys[0];

      const latitude = data.tours[tourKey].related[entryPointSightKey].latitude;
      const longitude = data.tours[tourKey].related[entryPointSightKey].longitude;

      const entryPointDistance = this.getDistance(latitude, longitude);

      const tourDistance = new TourDistance(tourKey.toString(), entryPointDistance);

      this.tourDistances.push(tourDistance);
    });


    this.tourDistances = this.tourDistances.sort((a, b) =>
        (a.distance > b.distance) ? 1 : -1);

    this.loadingClosestTours = false;
  }

  /**
   * Method that redirects
   * user to tour details.
   *
   * @param tour selected tour.
   */
  goToDetails(tour: TourDistance) {
    this.router.navigateByUrl('/details/' + SightTypes.TOURS + '/' + tour.tourName);
  }

}
