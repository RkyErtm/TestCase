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
        this.popupService.setMapInstance(map);
        this.capitalService.getCapitals().subscribe((res: Capital) => {
            for (const c of res?.features) {
                const lon = c.geometry.coordinates[0];
                const lat = c.geometry.coordinates[1];
                const marker = L.marker([lat, lon]);
                const popupContent = this.popupService.makeCapitalPopup(c.properties);

                marker.bindPopup(popupContent).on('popupopen', () => {
                    //click olan id'yi aldık.
                    this.popupService.sendDataId(c.properties.id);
                });

                marker.on('popupclose', () => {
                    this.popupService.sendDataId(0);
                })

                marker.addTo(map);
            }
        });
    }
}