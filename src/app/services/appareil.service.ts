import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  appareils = [
    { name: 'Machine à laver', status: 'éteint' },
    { name: 'Ordinateur', status: 'allumé' },
    { name: 'Television', status: 'éteint' },
  ];

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
