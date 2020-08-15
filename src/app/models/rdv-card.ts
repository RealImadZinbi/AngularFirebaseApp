import { RdvCardItem } from './rdv-card-item';
export class RdvCard {
    constructor(public items: RdvCardItem[]) {
    }
    get doctorIds() {
      return  Object.keys(this.items);
    }
}