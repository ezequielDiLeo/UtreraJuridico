import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-button',
  imports: [CommonModule],
  templateUrl: './wp-button.component.html',
  styleUrl: './wp-button.component.css'
})
export class WpButtonComponent implements OnInit{
//variables
modalIsOpen = false;

ngOnInit(): void {
  this.closeModal()
}

openModal(){
  this.modalIsOpen = true;
}

closeModal(){
  this.modalIsOpen = false;
}

}
