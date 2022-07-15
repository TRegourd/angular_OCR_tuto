import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IAppareil {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  appareilSubject = new Subject<IAppareil[]>();

  private appareils: IAppareil[] = [];

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
    this.saveAppareilToServer();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
    this.saveAppareilToServer();
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
    this.saveAppareilToServer();
  }

  deleteAppareil(index: number) {
    this.appareils.splice(index, 1);
    this.emitAppareilSubject();
    this.saveAppareilToServer();
  }

  constructor(private httpClient: HttpClient) {}

  saveAppareilToServer() {
    this.httpClient
      .put(
        'https://ocr-angluar-http-client-demo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json',
        this.appareils
      )
      .subscribe({
        next: () => console.log('appareil saved to server'),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  getAppareilFromServer() {
    this.httpClient
      .get<IAppareil[]>(
        'https://ocr-angluar-http-client-demo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json'
      )
      .subscribe({
        next: (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }
}
