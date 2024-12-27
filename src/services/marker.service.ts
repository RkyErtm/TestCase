import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Capital } from '../models/capital';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {
    capitals: string = '/assets/data/usa-capitals.geojson';

    constructor(private http: HttpClient) {
    }

    makeCapitalMarkers(map: L.Map): void {
        this.http.get<Capital>(this.capitals).subscribe((res: Capital) => {
            for (const c of res?.features) {
                const lon = c.geometry.coordinates[0];
                const lat = c.geometry.coordinates[1];
                const marker = L.marker([lat, lon]);

                marker.addTo(map);
            }
        });
    }
}