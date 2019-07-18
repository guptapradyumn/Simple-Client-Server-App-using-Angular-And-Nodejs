import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class CommonServiceService {

  constructor(private http: HttpClient) { }

  readonly url = 'http://localhost:3000/api/selectUsers';
  callJunction(appData: any) {
    return this.http.get(this.url);
  }


}
