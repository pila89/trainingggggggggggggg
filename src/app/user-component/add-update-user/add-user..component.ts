import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { addUser } from '../../store/users/action.user';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  title!: string;
  public userForm!: FormGroup;
  public users: User[] = [];

  ngOnInit(): void {
    this.initForm();
  }
  constructor(
    private store: Store,
    private router: Router // private firestore: Firestore
  ) {}

  initForm(): void {
    this.userForm = new FormGroup({
      title: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      vorname: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      adress: new FormArray([]),
    });
  }

  addAdress() {
    if (this.userForm.valid) {
      const newAddressGroup = new FormGroup({
        street: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
        ]),
        postalCode: new FormControl('', Validators.required),
      });
      this.addressesFormArray.push(newAddressGroup);
    }
  }

  get addressesFormArray(): FormArray {
    return this.userForm.get('adress') as FormArray;
  }

  removeAddress(index: number) {
    this.addressesFormArray.removeAt(index);
  }

  save() {
    // const collectionInstance = collection(this.firestore, 'users');
    // addDoc(collectionInstance, user)
    //   .then(() => {
    //     console.log('Data saved');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.store.dispatch(addUser({ user }));
      this.router.navigate(['list-user']);
    }
  }

  // updateUser( index: number) {
  //   const updateUser = this.userForm.value;
  //   this.users[index]=updateUser;
  // }

  resetForm() {
    this.userForm.reset();
  }
}
