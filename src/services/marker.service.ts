import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Capital } from '../models/capital';
import { CapitalService } from './capital.service';
import { PopupService } from './popup.service';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {
    constructor(
        private capitalService: CapitalService,
        private popupService: PopupService
    ) {
    }

    makeCapitalMarkers(map: L.Map): void {
        this.capitalService.getCapitals().subscribe((res: Capital) => {
            for (const c of res?.features) {
                const lon = c.geometry.coordinates[0];
                const lat = c.geometry.coordinates[1];
                const marker = L.marker([lat, lon]);
                marker.bindPopup(this.popupService.makeCapitalPopup(c.properties));
                marker.addTo(map);
            }
        });
    }
}