import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../services/marker.service';
import { SharedModule } from './shared.module';
import { CapitalService } from '../services/capital.service';
import { Capital, Feature } from '../models/capital';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-root',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  private map: any;
  capitals: Feature[] = [];
  filteredCapitals: Feature[] = [];
  searchText: string = '';

  private initMap(): void {
    this.map = L.map('map', {
      center: [32.8597, 39.9334],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    tiles.addTo(this.map);
  }

  constructor(private markerService: MarkerService,
    private capitalService: CapitalService
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.getCapitals();
    this.markerService.makeCapitalMarkers(this.map);
  }

  getCapitals() {
    this.capitalService.getCapitals().subscribe((res: Capital) => {
      this.filteredCapitals = this.capitals = res?.features;
      console.log('caps:', this.capitals)
    })
  }

  onSearch() {
    console.log(this.searchText);
    const lowerText = this.searchText.toLowerCase();
    console.log(lowerText);

    this.filteredCapitals = this.capitals.filter(x => {
      const capitalLowerText = x?.properties?.name.toLowerCase();
      return capitalLowerText.includes(lowerText);
    });
    console.log(this.filteredCapitals);

  }

}
