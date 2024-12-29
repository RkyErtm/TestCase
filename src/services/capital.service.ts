import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { Capital } from "../models/capital";

@Injectable({
    providedIn: 'root'
})
export class CapitalService {

    constructor(private http: HttpClient) {
    }

    getCapitals(): Observable<any> {
        const url: string = '/assets/data/usa-capitals.geojson';
        return this.http.get<Capital>(url).
            pipe(map(data => {
                const startDate = new Date();
                const endDate = new Date();
                endDate.setDate(startDate.getDate() + 1);
                //random time atama
                data.features.forEach(data => {
                    const randomDate = new Date(startDate.getTime() + Math.random() * (startDate.getTime() - endDate.getTime()));
                    data.properties.randomDate = randomDate.toISOString();
                })
                return data;
            }),
                catchError((err: Error) => {
                    return of('Err: ' + err.message)
                }));
    }
}