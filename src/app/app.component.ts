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
    "lat":"-23.749273",
    "lng":"-70.108439",
    "mapa": "https://maps.google.com/?t=h&q=-23.749273,-70.108439",
    "patente": "RBXB38",
    "tipo_alerta": "Fatiga y Somnolencia",
    "detalle_alerta": "Conductor Bostezando",
    "fecha": "03-09-2024 12:42:58",
    "nombre_contacto": "Nelson Connor",
    "nombre_responsable": "Sin Asignar",
    "cargo_responsable": "",
    "empresa": "INGENIERIA ERR SPA",
    "estado": "Por Gestionar",
    "notificaciones": [
        {
            "nombre": "Nelson Connor",
            "email": {
                "to": "nelsonconnor@savinghumanity.org",
                "status": "sent"
            },
            "telefono": "+56912345678",
            "cargo": "Ataja Incendios",
            "nivel": "1",
            "sms": "sent",
            "whatsapp": {
                "status": "read",
                "status_time": "03-09-2024 12:43:00"
            }
        },
        {
          "nombre": "Nelson Connor",
          "email": {
              "to": "nelsonconnor@savinghumanity.org",
              "status": "read"
          },
          "telefono": "+56912345678",
          "cargo": "Ataja Incendios",
          "nivel": "1",
          "sms": "sent",
          "whatsapp": {
              "status": "read",
              "status_time": "03-09-2024 12:43:00"
          }
      },
        // otros objetos de notificación...
    ]
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
    });
  }

  getSafeUrl(lat: string, lng: string): SafeResourceUrl {
    const url = `https://maps.google.com/?t=h&q=${lat},${lng}&z=10&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getEmailIconClass(status: string): string {
    switch(status) {
      case 'sent':
        return 'fa-check'; // Green check for sent
      case 'read':
        return 'fa-check-double'; // Double check for read
      case 'received':
        return 'fa-check-double blue'; // Blue double check for received
      default:
        return '';
    }
  }

  getSmsIconClass(smsStatus: string): string {
    return smsStatus === 'sent' ? 'fa-check' : '';
  }

  getWhatsappIconClass(status: string): string {
    switch(status) {
      case 'sent':
        return 'fa-check-double blue'; // Azul para "sent"
      case 'read':
        return 'fa-check-double'; // Doble check para "read"
      case 'received':
        return 'fa-check-double green'; // Verde para "received"
      default:
        return '';
    }
  }
}
