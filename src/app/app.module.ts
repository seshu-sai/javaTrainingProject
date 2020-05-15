import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { FindAllComponent } from './find-all/find-all.component';
import { FindIdComponent } from './find-id/find-id.component';
import { DelIdComponent } from './del-id/del-id.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { PatientService } from './patient.service';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsertComponent,
    UpdateComponent,
    FindAllComponent,
    FindIdComponent,
    DelIdComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:LoginComponent},
      {path:'insert', component:InsertComponent},
      {path:'update', component:UpdateComponent},
      {path:'findAll', component:FindAllComponent},
      {path:'findId', component:FindIdComponent},
      {path:'delId', component:DelIdComponent},
      {path:'dashboard', component:DashboardComponent}
    ]

    )

  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
