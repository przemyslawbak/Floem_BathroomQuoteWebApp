import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { QuoteItems } from '../_models/quote-items.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public postSaveQuote(model: QuoteItems): Observable<any> {
    const url = environment.apiUrl + 'api/quote/save';
    let subject = new Subject<any>();
    this.http.post<any>(url, model).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }
}
