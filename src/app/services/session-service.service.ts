import { ISession } from './../Isession';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  private _session: ISession

        constructor(){

        }

        setsession(value){
            this._session = value;
        }

        getsession(){
            return this._session
        }
}
