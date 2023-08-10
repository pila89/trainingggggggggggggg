import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-component/user-detail/user-detail.component';
import { UsersListComponent } from './user-component/users-list/users-list.component';
import { AddUserComponent } from './user-component/add-update-user/add-user..component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { userReducer } from './store/users/reducer.user';
import { StoreModule } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environement } from './environement/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';

import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';

import { ActivatedRoute } from '@angular/router';
import { ToastComponent } from './toast/toast.component';

// import { UserFireBaseService } from './services/fire-base.service';
//import { EffectsModule } from '@ngrx/effects';
// import { UserEffects } from './store/users/effect.user';

export const primeNgModules = [InputTextModule, ButtonModule, TableModule,ToastModule,RadioButtonModule];
@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersListComponent,
    AddUserComponent,
    ToastComponent,
  ],
  imports: [
    ...primeNgModules,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ users: userReducer }),
    StoreDevtoolsModule.instrument(),
    AngularFireModule.initializeApp(environement.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FirestoreModule,
  ],
  // providers: [AngularFireDatabase, UserFireBaseService],
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule {}
