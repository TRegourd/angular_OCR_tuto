import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  appareils = [
    { id: 1, name: 'Machine à laver', status: 'éteint' },
    { id: 2, name: 'Ordinateur', status: 'allumé' },
    { id: 3, name: 'Television', status: 'éteint' },
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find((appareil) => {
      return appareil.id === id;
    });
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  constructor() {}
}
