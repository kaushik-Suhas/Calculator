import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {
  keyAdded = new EventEmitter<string>();

  calculation(key1: string, key2: string, operator: string) {
     const exp = key1 + operator + key2
     return eval(exp)    
  }
  
}