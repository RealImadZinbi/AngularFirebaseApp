import { UserModel } from './models/user.model';
import { LoginModel } from './models/login.model';
import { Doc } from './doc.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private listSource = new Subject<Doc>();
  list$ = this.listSource.asObservable();
  private listeSource = new Subject<LoginModel>();
  liste$ = this.listeSource.asObservable();
  private listeeSource = new Subject<UserModel>();
  listee$ = this.listeeSource.asObservable();
  private lisSource = new Subject<string>();
  lis$ =  this.lisSource.asObservable();
  private liSource = new Subject<string>();
  li$ =  this.liSource.asObservable();
  constructor() { }

  sendMessage(message: any) {
    this.listSource.next(message);
  }
  sendUser(message: any) {
    this.listeSource.next(message);
  }
  sendUserId(message:any) {
    this.listeSource.next(message);
  }
  sendThing(message:any) {
    this.lisSource.next(message);
  }
  sendText(message:any) {
    this.liSource.next(message);
  }
}
