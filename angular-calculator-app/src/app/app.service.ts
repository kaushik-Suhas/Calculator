import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {
  keyAdded = new EventEmitter<string>();
}