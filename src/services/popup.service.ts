import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { datas, FeatureCollection } from '../data/capitals';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
    capitals: FeatureCollection[] = datas;

    constructor() {
        console.log(this.capitals);
    }

    makeCapitalMarkers(map: L.Map): void {
        for (const featureCollection of this.capitals) {
            for (const c of featureCollection.features) {
                const lon = c.geometry.coordinates[0];
                const lat = c.geometry.coordinates[1];
                const circle = L.marker([lat, lon]);
                //markerları yerleştirdik.
                circle.addTo(map);
            }
        }
    }
}