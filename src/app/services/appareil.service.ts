import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  appareilSubject = new Subject<any[]>();

  private appareils = [
    { id: 1, name: 'Machine à laver', status: 'éteint' },
    { id: 2, name: 'Ordinateur', status: 'allumé' },
    { id: 3, name: 'Television', status: 'éteint' },
  ];

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

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
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    this.appareils.push({
      name: name,
      status: status,
      id: Math.round(Math.random() * 1000),
    });
    this.emitAppareilSubject();
  }

  constructor() {}
}
