import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { observable } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public logged: boolean = false;
  public  _HttpClient;

  constructor(private formBuilder: FormBuilder,private  httpClient:HttpClient) {
    this._HttpClient=httpClient;
    this.loginForm = this.formBuilder.group({
      login: [""],
      password: [""]
    })
  }
  loggingFunction(reo){
    if(reo == 1){
      this.logged = true;
    }
  }
  

  simpleFunction(): void {
    console.log(this.loginForm.controls.login.value)
    console.log(this.loginForm.controls.password.value)
    
  let params = new HttpParams().set('login', this.loginForm.controls.login.value).set('password',this.loginForm.controls.password.value);

    
    if (this.loginForm.controls.login.value == "admin" && this.loginForm.controls.password.value == "admin")
      this.logged = true;
    else
      this.logged = false;
    let odp = this._HttpClient.get(`https://localhost:5001/api/Home/Login`, { params: params });
    //let odp = this.httpClient.get("https://localhost:5001/api/Home/GetUsermodels");
    odp.subscribe((reo)=>this.loggingFunction(reo));
  }

  ngOnInit() {
    
  }
}
