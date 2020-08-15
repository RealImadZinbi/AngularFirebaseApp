import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SymptomsService {

  constructor(private httpClient: HttpClient) { }
 
  public sendGETRequestWithParameters(para: string){   
    let params = new HttpParams();
    params = params.append('_page', para);
    params = params.append('_limit', para);

    return this.httpClient.get("api/", {params: params});
   }
}
