import { AppareilService } from './../services/appareil.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() appareilIndex!: number;
  @Input() appareilId!: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.appareilIndex);
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.appareilIndex);
  }

  onDelete() {
    this.appareilService.deleteAppareil(this.appareilIndex);
  }
}
