import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MarkerService } from '../services/marker.service';
import { PopupService } from '../services/popup.service';
// import * as L from 'leaflet';


@NgModule({
    exports: [
        LeafletModule
    ],
    imports: [LeafletModule],
    declarations: [],
    providers: [MarkerService, PopupService],
})
export class SharedModule { }
