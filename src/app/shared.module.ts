import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MarkerService } from '../services/marker.service';
import { PopupService } from '../services/popup.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import * as L from 'leaflet';


@NgModule({
    exports: [
        LeafletModule,
        CommonModule,
        FormsModule
    ],
    imports: [
        LeafletModule,
        CommonModule,
        FormsModule
    ],
    declarations: [],
    providers: [MarkerService, PopupService],
})
export class SharedModule { }
