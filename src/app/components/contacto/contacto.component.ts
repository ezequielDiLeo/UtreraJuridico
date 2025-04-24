import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { NgSelectModule } from '@ng-select/ng-select';
import { CountryService } from '../../services/countryService';
import { MapaComponent } from "../mapa/mapa.component";
import { CaratulaFootComponent } from "../caratula-foot/caratula-foot.component";

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, NavBarComponent, FormsModule, FooterComponent, ReactiveFormsModule, NgSelectModule, MapaComponent, CaratulaFootComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
  }


  contactForm: FormGroup;
  countries: { code: string; name: string; flag: string }[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      country: [null, [,Validators.required]],
      aceptar: [false, Validators.requiredTrue]
    });

    this.countries = this.countryService.getCountries();
  }

  get name() { return this.contactForm.get('name')!; }
  get lastName() { return this.contactForm.get('lastName')!; }
  get email() { return this.contactForm.get('email')!; }
  get country() { return this.contactForm.get('country')!; }
  get phone() { return this.contactForm.get('phone')!; }
  get message() { return this.contactForm.get('message')!; }

  sendMessage() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append("name", this.name.value);
      formData.append("lastName", this.lastName.value);
      formData.append("email", this.email.value);
      formData.append("phone", this.phone.value);
      formData.append("country", this.country.value.name);
      formData.append("message", this.message.value);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_redirect", "false"); // Evita recargar la página

      fetch("https://formsubmit.co/estudiojuridicoutrera@gmail.com", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (response.ok) {
          Swal.fire("¡Mensaje enviado!", "Tu mensaje fue enviado con éxito.", "success");
          this.contactForm.reset();
        } else {
          Swal.fire("Error", "Hubo un problema al enviar el mensaje.", "error");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        Swal.fire("Error", "No se pudo enviar el mensaje.", "error");
      });
    }
  }

}
