import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Capital } from '../models/capital';
import { CapitalService } from './capital.service';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {
    constructor(
        private capitalService: CapitalService
    ) {
    }

    makeCapitalMarkers(map: L.Map): void {
        this.capitalService.getCapitals().subscribe((res: Capital) => {
            for (const c of res?.features) {
                const lon = c.geometry.coordinates[0];
                const lat = c.geometry.coordinates[1];
                const marker = L.marker([lat, lon]);
                marker.addTo(map);
            }
        });
    }
}