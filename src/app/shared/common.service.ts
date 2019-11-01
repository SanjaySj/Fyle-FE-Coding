import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { Banks } from './bankModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  listedBanks: Observable<Banks[]>;
  constructor(private httpClient: HttpClient) { }

  getListOfBanks(cityName: string): Observable<Banks[]> {
    if (!this.listedBanks) {
      this.listedBanks = this.httpClient
        .get(`https://vast-shore-74260.herokuapp.com/banks?city=${cityName}`)
        .pipe(
          map(data => data as Banks[]),
          publishReplay(1),
          refCount()
        );
    }
    return this.listedBanks;
  }

  clearAPICache() {
    this.listedBanks = null;
  }
}
