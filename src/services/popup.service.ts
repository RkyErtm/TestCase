import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private dataId = new Subject<number>();
  dataId$ = this.dataId.asObservable();

  private mapInstance!: L.Map;
  private currentPopup: L.Popup | null = null;
  private currentPopupDataId: number | null = null;

  sendDataId(id: number) {
    this.dataId.next(id);
  }

  setMapInstance(map: L.Map): void {
    this.mapInstance = map;
  }

  getMapInstance(): L.Map {
    return this.mapInstance;
  }

  setCurrentPopup(popup: L.Popup, id: number | null) {
    this.currentPopup = popup;
    this.currentPopupDataId = id;
  }

  getCurrentPopup(): L.Popup | null {
    return this.currentPopup;
  }

  getCurrentPopupDataId(): number | null {
    return this.currentPopupDataId;
  }

  closePopup() {
    if (this.currentPopup) {
      this.mapInstance.closePopup(this.currentPopup);
      this.currentPopup = null;
      this.currentPopupDataId = null;
    }
  }

  //styles.scss'de stiller verildi.
  makeCapitalPopup(data: any): string {
    return `
      <div class="popup-container">
        <div class="mb-2">
          <div class="popup-title">${data?.name}</div>
          <span class="popup-state">${data?.state}</span>
        </div>
        <div class="popup-mid">
          <div class="popup-temp">
            <img src="../assets/imgs/icons/temperature.svg" alt="Temperature Icon" />
            <div class="popup-degree">${data?.temperature} &deg;C</div>
          </div>
          <button class="popup-btn temp-btn"><b>Sıcaklık</b> Ayarla</button>
        </div>
        <div class="popup-bottom">
          <div class="popup-humidity">
            <img src="../assets/imgs/icons/humidity.svg" alt="Humidity Icon" />
            <div class="popup-percentage">% ${data?.humidity}</div>
          </div>
          <button class="popup-btn humidity-btn"><b>Nem</b> Ayarla</button>
        </div>
      </div>`;
  }



}
