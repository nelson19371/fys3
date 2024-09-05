import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  id: string | null = null;

  constructor(
    private _route: ActivatedRoute,
    private dataSharingService: DataSharingService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      if (this.id) {
        this.dataSharingService.changeId(this.id);
      }
    });
  }
}


