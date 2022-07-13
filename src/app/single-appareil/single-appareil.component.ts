import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss'],
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'éteint';

  constructor(
    private appareilService: AppareilService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const appareil = this.appareilService.getAppareilById(Number(id));

    if (appareil) {
      this.name = appareil.name;
      this.status = appareil.status;
    }
  }
}
