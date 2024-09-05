import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private idSource = new BehaviorSubject<string | null>(null);
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id: string) {
    this.idSource.next(id);
  }
}

