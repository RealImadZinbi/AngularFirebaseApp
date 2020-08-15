import { Doc } from './doc.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
@Injectable({
  providedIn: 'root'
})
export class RdvCardService {

  constructor(private db: AngularFireDatabase,
              private afs: AngularFirestore) { }

  private create() {
   return  this.afs.collection('rdv-card').add({
     
      dateCreated:  new Date().getTime()
   });
  }
  private getItem(cardId: string, doctorId: string) {
    return this.afs.doc('/rdv-card/'+ cardId + '/doctor/' + doctorId);
  }
   async getCard() {
    let cardId = await this.getOrCreateCardId();
    return this.afs.doc('rdv-card/'+ cardId);
  }
  
   private async getOrCreateCardId() : Promise<string> {
  let cardId = localStorage.getItem('cardId');
  if (cardId) return cardId;

      let result = await this.create();
      localStorage.setItem('cardId',result.id);
       return result.id;
     
   
       return cardId;
   
  }        
  async addToCard(doctor:Doc) {
    let cardId = await this.getOrCreateCardId();
    let doctors$ = this.getItem(cardId,doctor.id);
    doctors$.set({
      doctor: doctor,
      rdvOn : doctor.rdvOn = true
    });
    return 
}
}