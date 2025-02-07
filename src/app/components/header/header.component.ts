import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}
  
    
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  navigateTo(path:any){
    this.isMenuOpen = false;
    this.router.navigate([path]); 
  }
}
