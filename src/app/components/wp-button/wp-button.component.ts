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
chatAnswer: string | null = null;

  ngOnInit(): void {
    this.closeModal()
  }

openModal() {
  this.modalIsOpen = true;
  document.body.classList.add('body-no-scroll');
}

closeModal() {
  this.modalIsOpen = false;
   document.body.classList.remove('body-no-scroll');
}

chatHistory: { sender: 'user' | 'bot', text: string }[] = [
  { sender: 'bot', text: 'Hola! 👋 ¿En qué podemos ayudarte?' }
];
userReplied = false;

backToOptions() {
  this.userReplied = false;
  this.chatAnswer = null;
}

sendMessage(type: string) {
  let question = '';
  let response = '';

  switch (type) {
    case 'turno':
      question = 'Horarios de atención';
      response = 'Los horarios de atención son de lunes a viernes de 9 a 18 hs. Podés pedir un turno para el día y horario que más te convenga.';
      break;
    case 'consultas':
      question = '¿Cómo hago una consulta?';
      response = 'Podés dejarnos tu consulta vía email o vía WhatsApp con el boton que indíca Abrir Chat y te responderemos a la brevedad.';
      break;
    case 'abogados':
      question = 'Conocer al equipo';
      response = 'Nuestro equipo está formado por especialistas en distintas áreas del derecho como Divorcio, Laboral, Comercial, etc. puedes verificarlo en la página principal. Para más información comunicate con nosotros haciendo clíck en el botón de Abrir Chat.';
      break;
    case 'honorarios':
      question = '¿Cuáles son los honorarios por una consulta?';
      response = 'Los honorarios dependen del tipo de consulta y su complejidad. Podemos brindarte una estimación inicial sin compromiso. Si preferís, contanos brevemente tu caso para orientarte mejor.';
      break;
    case 'atencion':
      question = '¿Brindan atención online o solo presencial?';
      response = 'Brindamos atención tanto presencial como virtual. Podemos coordinar una videollamada para que recibas asesoramiento sin necesidad de trasladarte, con la misma seriedad y compromiso.';
      break;
  }

  this.chatHistory.push({ sender: 'user', text: question });
  this.userReplied = true;

  setTimeout(() => {
    this.chatHistory.push({ sender: 'bot', text: response });
    this.scrollToBottom();
  }, 600);
}

scrollToBottom() {
  setTimeout(() => {
    const container = document.querySelector('.chat-window');
    if (container) container.scrollTop = container.scrollHeight;
  }, 50);
}

}
