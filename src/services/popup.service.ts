import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';

@Injectable({
    providedIn: 'root'
})
export class PopupService {

    // constructor(private marker: MarkerService) {
    // }

    // makeCapitalMarkers(map: L.Map): void {
    //     for (const c of this.marker?.capitals) {
    //         const lon = c.geometry.coordinates[0];
    //         const lat = c.geometry.coordinates[1];
    //         const circle = L.marker([lat, lon]);
    //         //markerları yerleştirdik.
    //         circle.addTo(map);
    //     }
    // }
}