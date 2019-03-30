import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'isLogged'
  })

  export class IsLogged implements OnInit {
    public static isLogged: boolean = false;
    public ngOnInit(){ }
    public set(tmp:boolean){
      IsLogged.isLogged = tmp;
    }
    public get(){
      return IsLogged.isLogged;
    }
    }