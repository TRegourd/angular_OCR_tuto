import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss'],
})
export class EditAppareilComponent implements OnInit {
  defaultStatus = 'éteint';

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const { name, status } = form.value;
    this.appareilService.addAppareil(name, status);
  }
}
