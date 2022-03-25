import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {}
  ngDoCheck(){
    if(localStorage.token){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
