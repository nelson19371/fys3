import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
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

        this.alerta = {
          "lat": "-23.749273"+this.id,
          "lng": "-70.108439"+this.id,
          "mapa": "https://maps.google.com/?t=h&q=-23.749273,-70.108439 id:"+this.id,
          "patente": "RBXB38 id:"+this.id,
          "tipo_alerta": "Fatiga y Somnolencia id:"+this.id,
          "detalle_alerta": "Conductor Bostezando id:"+this.id,
          "fecha": "03-09-2024 12:42:58 id:"+this.id,
          "nombre_contacto": "Nelson Connor id:"+this.id,
          "nombre_responsable": "Sin Asignar id:"+this.id,
          "cargo_responsable": " id:"+this.id,
          "empresa": "INGENIERIA ERR SPA id:"+this.id,
          "estado": "Por Gestionar id:"+this.id
        };



    });
  }

  getSafeUrl(lat: string, lng: string): SafeResourceUrl {
    const url = `https://maps.google.com/?t=h&q=${lat},${lng}&z=10&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

