import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkpreference: ['', Validators.required],
      hobbies: this.formBuilder.array([]),
    });
  }

  onSubmitUserForm(): void {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkpreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userServices.addUser(newUser);
  }

  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
