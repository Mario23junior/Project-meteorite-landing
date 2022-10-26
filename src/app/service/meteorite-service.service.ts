import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Meteorite } from '../components/model/Meteorite.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteServiceService {

  public baseUrl = "http://localhost:8080";
  public uri = "/api/v1/meteorite/";

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Meteorite[]> {
    let url = this.baseUrl+this.uri
    let request = this.httpClient.get<Meteorite[]>(url)
    .pipe(
      tap(t => console.log(t))
    )
    return request
  }
}
