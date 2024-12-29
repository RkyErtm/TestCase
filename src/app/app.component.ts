import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Capital, Feature } from '../models/capital';
import { CapitalService } from '../services/capital.service';
import { MarkerService } from '../services/marker.service';
import { PopupService } from '../services/popup.service';
import { SharedModule } from './shared.module';
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
  popupDataId?: number = 0;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.925533, 32.866287],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    tiles.addTo(this.map);
  }


  constructor(private markerService: MarkerService,
    private capitalService: CapitalService,
    private popupService: PopupService
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.getCapitals();
    this.markerService.makeCapitalMarkers(this.map);
    this.popupService.dataId$.subscribe((res: number) => {
      this.popupDataId = res;
    });
  }

  //widget tarafından popup açma
  openPopup(capital: Feature) {
    const mapInstance = this.popupService.getMapInstance();
    const popupContent = this.popupService.makeCapitalPopup(capital?.properties);

    //popup açık ise kapat
    if (this.popupService.getCurrentPopup()?.isOpen()) {
      const currentPopupDataId = this.popupService.getCurrentPopupDataId();
      if (currentPopupDataId === capital?.properties?.id) {
        this.popupService.closePopup();
        this.popupService.sendDataId(0);
        return;
      }
    }

    const popup = L.popup()
      .setLatLng([capital?.geometry?.coordinates[1], capital?.geometry?.coordinates[0]])
      .setContent(popupContent)
      .openOn(mapInstance);

    this.popupService.setCurrentPopup(popup, capital?.properties?.id);
    this.popupService.sendDataId(capital?.properties?.id);
  }


  getCapitals() {
    this.capitalService.getCapitals().subscribe((res: Capital) => {
      //alfabetik sıralama
      this.filteredCapitals = this.capitals = res?.features.sort((a: any, b: any) =>
        a?.properties?.name.localeCompare(b?.properties?.name));
    })
  }

  onSearch() {
    if (this.popupService.getCurrentPopup()?.isOpen()) {
      this.popupService.closePopup();
      this.popupService.sendDataId(0);
      return;
    }
    const lowerText = this.searchText.toLowerCase();
    this.filteredCapitals = this.capitals.filter(x => {
      const capitalLowerText = x?.properties?.name.toLowerCase();
      return capitalLowerText.includes(lowerText);
    });
  }

}
