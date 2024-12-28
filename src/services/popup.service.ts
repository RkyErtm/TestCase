import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
    constructor() { }

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
          <button class="popup-btn"><b>Sıcaklık</b> Ayarla</button>
        </div>
        <div class="popup-bottom">
          <div class="popup-humidity">
            <img src="../assets/imgs/icons/humidity.svg" alt="Humidity Icon" />
            <div class="popup-percentage">% ${data?.humidity}</div>
          </div>
          <button class="popup-btn"><b>Nem</b> Ayarla</button>
        </div>
      </div>`;
    }
}
