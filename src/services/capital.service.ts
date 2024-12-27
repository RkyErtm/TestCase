import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
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
            pipe(catchError((err: Error) => {
                return of('Err: ' + err.message)
            }));
    }
}