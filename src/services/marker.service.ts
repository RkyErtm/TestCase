import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { datas, Feature } from '../data/capitals';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {
    public capitals: Feature[] = datas[0].features;

    makeCapitalMarkers(map: L.Map): void {
        for (const c of this.capitals) {
            const lon = c.geometry.coordinates[0];
            const lat = c.geometry.coordinates[1];
            const circle = L.marker([lat, lon]);
            //markerları yerleştirdik.
            circle.addTo(map);

        }
    }
}