import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import * as L from 'leaflet';


@NgModule({
    exports: [
        LeafletModule
    ],
    imports: [LeafletModule],
    declarations: [],
})
export class SharedModule { }
