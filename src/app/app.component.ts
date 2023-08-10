import { Component, inject } from '@angular/core';

import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';
// import { UserFireBaseService } from './services/fire-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent {

  constructor(private messageService : MessageService){}
  save(){
    this.messageService.add({severity:'success', detail: 'User successfully added !'});
  }
  delete(){
    this.messageService.add({severity:'success', detail: 'User successfully deleted !'});
  }
  update(){
    this.messageService.add({severity:'success', detail: 'User successfully updated !'});
  }
  error(){
    this.messageService.add({severity:'error', detail: 'Please provide a name !'});
  }
  // public users!: User[];
  //  item$!: Observable<any[]>;
  //  firestore: Firestore = inject(Firestore);

  //  constructor(private userFireBaseService: UserFireBaseService) {
  //   const  users = this.userFireBaseService.GetUsersList();
  //   console.log(users);

  //  }
  // constructor(private userService: UserService) {
  //   this.userService.getAllUsers().subscribe((data) => {
  //     console.log(data);
  //     this.users = data;
  //   });
  // }
}
