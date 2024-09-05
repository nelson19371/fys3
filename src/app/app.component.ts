import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  alerta = {
    "lat": "-23.749273",
    "lng": "-70.108439",
    "mapa": "https://maps.google.com/?t=h&q=-23.749273,-70.108439",
    "patente": "RBXB38",
    "tipo_alerta": "Fatiga y Somnolencia",
    "detalle_alerta": "Conductor Bostezando",
    "fecha": "03-09-2024 12:42:58",
    "nombre_contacto": "John Connor",
    "nombre_responsable": "Sin Asignar",
    "cargo_responsable": "",
    "empresa": "INGENIERIA ERR SPA",
    "estado": "Por Gestionar"
  };

  mapUrl: SafeResourceUrl;
  id: string | null = null;

  constructor(private sanitizer: DomSanitizer, private dataSharingService: DataSharingService) {
    this.mapUrl = this.getSafeUrl(this.alerta.lat, this.alerta.lng);
  }

  ngOnInit(): void {
    this.dataSharingService.currentId.subscribe(id => {
      this.id = id;
      console.log("ID recibido en AppComponent:", this.id);
      if (this.id=='123') {
        this.alerta = {
          "lat": "-23.749273",
          "lng": "-70.108439",
          "mapa": "https://maps.google.com/?t=h&q=-23.749273,-70.108439",
          "patente": "RBXB38",
          "tipo_alerta": "Fatiga y Somnolencia",
          "detalle_alerta": "Conductor Bostezando",
          "fecha": "03-09-2024 12:42:58",
          "nombre_contacto": "Nelson Connor",
          "nombre_responsable": "Sin Asignar",
          "cargo_responsable": "",
          "empresa": "INGENIERIA ERR SPA",
          "estado": "Por Gestionar"
        };
      }
        
      // Puedes usar el id aquí para hacer alguna operación adicional si es necesario
    });
  }

  getSafeUrl(lat: string, lng: string): SafeResourceUrl {
    const url = `https://maps.google.com/?t=h&q=${lat},${lng}&z=10&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

